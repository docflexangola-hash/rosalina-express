"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import type { ReactNode } from "react";

export type BookingData = {
  routeId: string;
  data: string;
  passageiros: number;
  passengerName: string;
  passengerBI: string;
  passengerPhone: string;
  passengerEmail: string;
  seat: string;
  baggageExtras: {
    volumeExtra: boolean;
    seguro: boolean;
  };
  paymentMethod: string;
  totalKz: number;
};

const STORAGE_KEY = "rosalina.booking.v1";

const defaultData: BookingData = {
  routeId: "VOL-LU-01",
  data: "2026-09-04",
  passageiros: 1,
  passengerName: "",
  passengerBI: "",
  passengerPhone: "",
  passengerEmail: "",
  seat: "",
  baggageExtras: {
    volumeExtra: false,
    seguro: false,
  },
  paymentMethod: "multicaixa",
  totalKz: 500,
};

type BookingContextValue = {
  data: BookingData;
  update: (patch: Partial<BookingData>) => void;
  reset: () => void;
};

const BookingContext = createContext<BookingContextValue | null>(null);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<BookingData>(() => {
    if (typeof window === "undefined") return defaultData;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return defaultData;
      return { ...defaultData, ...JSON.parse(raw) as Partial<BookingData> };
    } catch {
      return defaultData;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {
      // storage might be full or unavailable; ignore
    }
  }, [data]);

  const update = useCallback((patch: Partial<BookingData>) => {
    setData((prev) => ({ ...prev, ...patch }));
  }, []);

  const reset = useCallback(() => {
    setData(defaultData);
  }, []);

  return (
    <BookingContext.Provider value={{ data, update, reset }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) {
    throw new Error("useBooking must be used within BookingProvider");
  }
  return ctx;
}
