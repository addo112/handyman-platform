"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Currency = "USD" | "GHS";

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  formatPrice: (amountInUSD: number) => string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

// Assuming a rough conversion rate for the mockup
export const USD_TO_GHS_RATE = 15.5;

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrency] = useState<Currency>("USD");

  // Load saved currency from localStorage if it exists
  useEffect(() => {
    const saved = localStorage.getItem("handyman_currency");
    if (saved === "USD" || saved === "GHS") {
      setCurrency(saved);
    }
  }, []);

  const handleSetCurrency = (newCurrency: Currency) => {
    setCurrency(newCurrency);
    localStorage.setItem("handyman_currency", newCurrency);
  };

  const formatPrice = (amountInUSD: number) => {
    if (currency === "GHS") {
      const ghsAmount = amountInUSD * USD_TO_GHS_RATE;
      return `GH₵${ghsAmount.toFixed(2)}`;
    }
    return `$${amountInUSD.toFixed(2)}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency: handleSetCurrency, formatPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
}
