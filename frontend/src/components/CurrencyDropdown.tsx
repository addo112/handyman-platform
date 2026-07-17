"use client";

import { useCurrency } from "@/components/CurrencyProvider";
import { Globe } from "lucide-react";

export function CurrencyDropdown() {
  const { currency, setCurrency } = useCurrency();

  return (
    <div className="flex bg-slate-100 dark:bg-slate-700/50 p-1 rounded-lg items-center shadow-inner">
      <button 
        onClick={() => setCurrency("USD")}
        className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${currency === "USD" ? "bg-white dark:bg-slate-600 text-slate-900 dark:text-white shadow-sm" : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"}`}
      >
        USD
      </button>
      <button 
        onClick={() => setCurrency("GHS")}
        className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${currency === "GHS" ? "bg-white dark:bg-slate-600 text-slate-900 dark:text-white shadow-sm" : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"}`}
      >
        GHS
      </button>
    </div>
  );
}
