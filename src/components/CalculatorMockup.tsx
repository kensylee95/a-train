import { useMemo, useState } from "react";
import { FeeItem, Product } from "@/types/global";
import { useAppSelector } from "@/lib/hooks";

type Currency = "USD" | "NGN";

function parseFeeStringToAmount(
  feeText: string,
  amountInput: number,
  contextCurrency: Currency
): { value: number; currency: Currency } {
  const trimmed = feeText.trim().toUpperCase();
  if (trimmed === "FREE") return { value: 0, currency: contextCurrency };

  const fixedUsd = trimmed.match(/^\$\s*(\d+(?:\.\d+)?)/);
  if (fixedUsd) return { value: parseFloat(fixedUsd[1]), currency: "USD" };

  const fixedNgn = trimmed.match(/^₦\s*(\d+(?:,\d{3})*(?:\.\d+)?)/);
  if (fixedNgn)
    return {
      value: parseFloat(fixedNgn[1].replace(/,/g, "")),
      currency: "NGN",
    };

  const pctMatch = trimmed.match(/^(\d+(?:\.\d+)?)%/);
  if (pctMatch) {
    const pct = parseFloat(pctMatch[1]) / 100;
    const raw = amountInput * pct;

    const capMatch = trimmed.match(/\(([^)]+)\)/);
    if (capMatch) {
      const range = capMatch[1].split(/[–-]/).map((s) => s.trim());
      let minVal: number | undefined;
      let maxVal: number | undefined;
      if (range.length === 2) {
        const min = range[0].match(/\$\s*(\d+(?:\.\d+)?)/);
        const max = range[1].match(/\$\s*(\d+(?:\.\d+)?)/);
        if (min) minVal = parseFloat(min[1]);
        if (max) maxVal = parseFloat(max[1]);
      } else {
        const single = capMatch[1].match(/\$\s*(\d+(?:\.\d+)?)/);
        if (single) minVal = parseFloat(single[1]);
      }
      const clamped = Math.min(
        maxVal ?? Number.POSITIVE_INFINITY,
        Math.max(minVal ?? 0, raw)
      );
      return { value: clamped, currency: "USD" };
    }
    return { value: raw, currency: contextCurrency };
  }

  return { value: 0, currency: contextCurrency };
}

function detectCurrency(
  product: Product,
  category: string,
  service: string
): Currency {
  const blob = `${product} ${category} ${service}`.toUpperCase();
  if (blob.includes("NGN") || blob.includes("NG ")) return "NGN";
  return "USD";
}

export default function CalculatorMockup() {
  const fees = useAppSelector((state) => state.fees.fees);

  if (!fees) {
    return null;
  }
  const [product, setProduct] = useState<Product>("Customer");
  const categories = useMemo(
    () => Object.keys(fees[product] ?? {}),
    [fees, product]
  );
  const [rawCategory, setRawCategory] = useState<string>("");
  const category = categories.includes(rawCategory)
    ? rawCategory
    : categories[0] ?? "";
  const services: FeeItem[] = useMemo(
    () => (category ? fees[product]?.[category] ?? [] : []),
    [fees, product, category]
  );
  const [rawServiceName, setRawServiceName] = useState<string>("");
  const serviceName =
    services.find((s) => s.Service === rawServiceName)?.Service ??
    services[0]?.Service ??
    "";
  const [amount, setAmount] = useState<string>("");

  const selectedItem = services.find((s) => s.Service === serviceName);
  const numericAmount = parseFloat(amount) || 0;
  const currency = detectCurrency(product, category, serviceName);
  const computed = selectedItem
    ? parseFeeStringToAmount(selectedItem.Fee, numericAmount, currency)
    : { value: 0, currency };
  const formatted =
    computed.currency === "USD"
      ? `$${computed.value.toFixed(2)}`
      : `₦${computed.value.toFixed(2)}`;

  return (
    <div className="relative flex justify-center lg:justify-end">
      <div className="relative">
        {/* Phone Frame */}
        <div className="w-80 h-[380px] bg-gray-900 rounded-3xl p-2 shadow-2xl">
          <div className="w-full h-full bg-white rounded-2xl overflow-hidden relative">
            {/* Status Bar */}
            <div className="bg-vital-blue h-8 flex items-center justify-between px-4 text-white text-sm">
              <span>9:41</span>
              <div className="flex space-x-1">
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <div className="w-1 h-1 bg-white rounded-full"></div>
              </div>
            </div>

            {/* App Content */}
            <div className="p-4 space-y-4 h-full overflow-y-auto">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-vital-dark-gray">
                  Live Calculator
                </h3>
                <p className="text-sm text-vital-gray">
                  Estimate your swap costs
                </p>
              </div>

              {/* Calculator Interface */}
              <div className="space-y-4">
                {/* Product and Category */}
                <div className="grid grid-cols-2 gap-2">
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm font-semibold focus:outline-none focus:border-vital-blue"
                    value={product}
                    onChange={(e) => setProduct(e.target.value as Product)}
                  >
                    {(["Customer", "Business"] as Product[]).map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>

                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm font-semibold focus:outline-none focus:border-vital-blue"
                    value={category}
                    onChange={(e) => setRawCategory(e.target.value)}
                  >
                    {categories.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Service (shows service name + fee) */}
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm font-semibold focus:outline-none focus:border-vital-blue"
                  value={serviceName}
                  onChange={(e) => setRawServiceName(e.target.value)}
                >
                  {services.map((s) => (
                    <option key={s.Service} value={s.Service}>
                      {`${s.Service} — ${s.Fee}`}
                    </option>
                  ))}
                </select>
                {selectedItem?.Description && (
                  <div className="text-xs text-vital-gray">
                    {selectedItem.Description}
                  </div>
                )}

                {/* Amount Input */}
                <div className="relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                    <div className="w-6 h-6 bg-vital-blue rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">
                        {currency === "USD" ? "$" : "₦"}
                      </span>
                    </div>
                  </div>
                  <input
                    type="number"
                    placeholder="Amount input"
                    className="w-full pl-12 pr-4 py-2 border-2 border-dashed border-vital-gray rounded-full text-center text-sm font-semibold focus:outline-none focus:border-vital-blue"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>

                {/* Summary */}
                <div className="space-y-1">
                  <div className="text-sm text-vital-dark-gray font-medium">
                    Fee Rule:{" "}
                    <span className="text-vital-gray">
                      {selectedItem?.Fee ?? "—"}
                    </span>
                  </div>
                  <div className="text-base font-semibold text-vital-dark-gray">
                    Estimated Fee:{" "}
                    <span className="text-vital-blue">{formatted}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
