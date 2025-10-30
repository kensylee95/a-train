"use client";
import { useState, useRef, useEffect } from "react";
import { ArrowLeftRight, ChevronDown, Loader2 } from "lucide-react";
import { convertFXAmount } from "@/utils/helper";

const CURRENCIES = [
  { code: "USD", flag: "🇺🇸" },
  { code: "NGN", flag: "🇳🇬" },
];

export default function FXSimulator({
  initialRate = 1445.62,
}: {
  initialRate?: number;
}) {
  const [fromCur, setFromCur] = useState("USD");
  const [toCur, setToCur] = useState("NGN");
  const [fromAmount, setFromAmount] = useState("");
  const [toAmount, setToAmount] = useState("");
  const [activeField, setActiveField] = useState<"from" | "to">("from");
  const [rate, setRate] = useState<number>(initialRate);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Dropdown open state
  const [openDropdown, setOpenDropdown] = useState<"from" | "to" | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Fetch FX rate client-side only
  async function fetchFxClient({ from, to }: { from: string; to: string }) {
    const url = `/api/get-fx-rate?from=${encodeURIComponent(
      from
    )}&to=${encodeURIComponent(to)}`;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(url, { cache: "no-store" });
      if (!res.ok) throw new Error("Failed to fetch FX rate");
      const data = await res.json();
      setRate(Number(data.rate));
    } catch (e) {
      setError("Unable to fetch live FX rate. Showing last known rate.");
      setRate(initialRate);
    } finally {
      setLoading(false);
    }
  }

  // Fetch whenever fromCur or toCur changes
  useEffect(() => {
    setLoading(true);
    setError(null);
    const timeout = setTimeout(() => {
      fetchFxClient({ from: fromCur, to: toCur });
    }, 200);
    return () => {
      clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fromCur, toCur]);

  // Two-way conversion: when fromAmount changes (active), update toAmount and vice versa
  useEffect(() => {
    if (activeField === "from") {
      const result = convertFXAmount({
        from: fromCur,
        to: toCur,
        rate,
        amount: fromAmount,
      });
      setToAmount(
        fromAmount === ""
          ? ""
          : result === 0
          ? ""
          : Number(result.toFixed(2)).toString()
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fromAmount, fromCur, toCur, rate]);

  useEffect(() => {
    if (activeField === "to") {
      const result = convertFXAmount({
        from: toCur,
        to: fromCur,
        rate,
        amount: toAmount,
      });
      setFromAmount(
        toAmount === ""
          ? ""
          : result === 0
          ? ""
          : Number(result.toFixed(2)).toString()
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toAmount, fromCur, toCur, rate]);

  // Swap handler: flip currencies+values, maintain activeField
  function swap() {
    setFromCur(toCur);
    setToCur(fromCur);
    setFromAmount(toAmount);
    setToAmount(fromAmount);
    setOpenDropdown(null);
  }

  // Currency select: swap field values and keep math
  function handleCurChange(which: "from" | "to", val: string) {
    const opposite = CURRENCIES.find((c) => c.code !== val)!.code;
    if (which === "from") {
      setFromCur(val);
      setToCur(opposite);
    } else {
      setToCur(val);
      setFromCur(opposite);
    }
    setOpenDropdown(null);
    // Re-run computations
    setTimeout(() => {
      if (activeField === "from") {
        setFromAmount(fromAmount); // triggers useEffect
      } else {
        setToAmount(toAmount);
      }
    }, 0);
  }

  // Close the dropdown when clicking outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !(e.target as Element).closest(".fx-dropdown-toggle")
      ) {
        setOpenDropdown(null);
      }
    }
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <section
      id="fx-simulator"
      className="bg-linear-to-br from-vital-blue/5 to-blue-50 py-12"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center gap-12 px-4">
        {/* Hero content - left */}
        <div className="flex-1 min-w-[280px] flex flex-col justify-center items-start gap-8">
          <span className="inline-block bg-vital-blue/10 text-vital-blue font-gilroy font-bold text-xs px-4 py-1 rounded-full mb-2">
            FX SIMULATION TOOL
          </span>
          <h1 className="text-3xl font-bold text-vital-dark-gray font-gilroy mb-2 md:text-4xl lg:text-5xl leading-tight">
            Simulate your FX swap instantly
          </h1>
          <p className="text-lg text-vital-gray max-w-md font-poppins">
            Check how much you’d receive using today’s live USD/NGN market
            rates. No guesswork, just clarity.
          </p>
        </div>
        {/* Converter UI - right */}
        <div
          ref={dropdownRef}
          className="flex-1 max-w-xl w-full bg-white rounded-2xl shadow-lg border border-vital-gray/30 p-8 mx-auto"
        >
          <div className="flex flex-col gap-4">
            <CurrencyInputRow
              label="You send"
              cur={fromCur}
              setCur={(v) => handleCurChange("from", v)}
              openDropdown={openDropdown === "from"}
              setOpenDropdown={() =>
                setOpenDropdown(openDropdown === "from" ? null : "from")
              }
              value={fromAmount}
              setValue={(v) => {
                setActiveField("from");
                setFromAmount(v);
              }}
              otherCur={toCur}
              disabled={loading}
            />
            {/* Rate & Swap row */}
            <div className="flex items-center justify-between gap-4 my-6 min-h-[46px]">
              <span className="bg-vital-blue text-white rounded-full px-4 py-2 font-semibold flex items-center text-lg shadow min-w-[220px]">
                {fromCur} / {toCur}: &nbsp;
                {loading ? (
                  <Loader2 className="w-5 h-5 animate-spin ml-2 mr-1" />
                ) : null}
                <span className="ml-2 font-poppins">
                  1 {fromCur} ={" "}
                  {fromCur === "USD" ? rate : (1 / rate).toFixed(5)} {toCur}
                </span>
              </span>
              <button
                aria-label="Swap currencies"
                onClick={swap}
                className="ml-3 p-2 bg-vital-yellow text-vital-dark-gray hover:bg-yellow-400 transition rounded-full shadow"
                disabled={loading}
              >
                <ArrowLeftRight className="w-5 h-5" />
              </button>
            </div>
            {error && (
              <div className="text-xs text-red-500 text-center pb-2">
                {error}
              </div>
            )}
            <CurrencyInputRow
              label="You receive"
              cur={toCur}
              setCur={(v) => handleCurChange("to", v)}
              openDropdown={openDropdown === "to"}
              setOpenDropdown={() =>
                setOpenDropdown(openDropdown === "to" ? null : "to")
              }
              value={toAmount}
              setValue={(v) => {
                setActiveField("to");
                setToAmount(v);
              }}
              otherCur={fromCur}
              disabled={loading}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const CurrencyInputRow = (props: {
  label: string;
  cur: string;
  setCur: (c: string) => void;
  openDropdown: boolean;
  setOpenDropdown: () => void;
  value?: string;
  setValue: (v: string) => void;
  otherCur: string;
  disabled?: boolean;
}) => {
  return (
    <div className="flex items-center rounded-lg border bg-vital-light-blue px-3 py-2 gap-2 relative">
      <div className="flex-1">
        <label className="block text-xs text-vital-gray font-semibold mb-1">
          {props.label}
        </label>
        <input
          type="number"
          min="0"
          className="text-2xl font-poppins font-bold bg-transparent outline-none border-none focus:ring-0 w-full"
          value={props.value || ""}
          onChange={(e) => props.setValue(e.target.value)}
          placeholder="0"
          disabled={props.disabled}
        />
      </div>
      {/* Currency selector */}
      <div className="fx-dropdown-toggle relative select-none z-10">
        <button
          type="button"
          className="flex items-center ml-1 border-none bg-vital-blue/5 px-3 py-1.5 rounded-lg min-w-[92px] group focus:outline-none focus-visible:ring focus-visible:ring-offset-2"
          onClick={props.setOpenDropdown}
          tabIndex={0}
        >
          <span className="text-xl mr-2">
            {CURRENCIES.find((c) => c.code === props.cur)?.flag}
          </span>
          <span className="font-semibold text-base text-vital-dark-gray">
            {props.cur}
          </span>
          <ChevronDown className="w-4 h-4 text-vital-gray opacity-40 ml-1 group-hover:opacity-60" />
        </button>
        {/* Dropdown */}
        {props.openDropdown && (
          <div className="absolute top-full left-0 mt-2 w-28 bg-white border shadow-lg rounded-md z-30 overflow-hidden">
            {CURRENCIES.map((c) => (
              <button
                type="button"
                className="block w-full text-left px-4 py-2 hover:bg-vital-blue/10 text-vital-dark-gray font-poppins text-base"
                key={c.code}
                onClick={() => props.setCur(c.code)}
              >
                <span className="mr-2 text-xl">{c.flag}</span>
                {c.code}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
