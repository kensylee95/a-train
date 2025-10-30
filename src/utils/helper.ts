// Returns { currency: 'USD' | 'NGN', percent: number, min?: number, max?: number }
export function parseFeePercentClamps(fee: string): {
  currency: "USD" | "NGN";
  percent: number;
  min?: number;
  max?: number;
} | null {
  if (!fee) return null;
  // 1. Extract percent (e.g. 2% or 2.5%)
  const pctMatch = fee.trim().match(/^(\d+(?:\.\d+)?)%/);
  if (!pctMatch) return null;
  const percent = parseFloat(pctMatch[1]);

  // 2. Determine context currency (look for $ or ₦ clamp, default to USD)
  let currency: "USD" | "NGN" = "USD";
  if (/₦/.test(fee)) currency = "NGN";
  // Otherwise, if $ appears, it's USD; could enhance later for cross-currency

  // 3. Extract min/max inside (...) parentheses
  let min: number | undefined = undefined;
  let max: number | undefined = undefined;
  const clampParens = fee.match(/\(([^)]+)\)/);
  if (clampParens) {
    // Accept form like '$1', '₦100', '$1–$2', '₦100–₦400', '₦100-', '-₦400', same with $
    const clampText = clampParens[1].replace(/\s/g, "");
    // Range
    if (/–|-/.test(clampText)) {
      const [left, right] = clampText.split(/–|-/);
      min = left ? parseFloat(left.replace(/[^\d.]/g, "")) : undefined;
      max = right ? parseFloat(right.replace(/[^\d.]/g, "")) : undefined;
    } else {
      // Single value (min only)
      min = parseFloat(clampText.replace(/[^\d.]/g, ""));
    }
  }
  if (isNaN(min!)) min = undefined;
  if (isNaN(max!)) max = undefined;
  return { currency, percent, min, max };
}

export function convertFXAmount({
  from,
  to,
  rate,
  amount,
}: {
  from: string;
  to: string;
  rate: number;
  amount: string | number;
}): number {
  const amt = typeof amount === "string" ? parseFloat(amount) : amount;
  if (!rate || !amt || isNaN(amt)) return 0;
  const fromU = from.toUpperCase();
  const toU = to.toUpperCase();
  if (fromU === toU) return amt;
  if (fromU === "USD" && toU === "NGN") return amt * rate;
  if (fromU === "NGN" && toU === "USD") return amt / rate;
  return 0; // Unsupported
}
