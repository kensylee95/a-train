"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { fetchFees } from "@/store/feesSlice";

export default function FeesLoader() {
  const dispatch = useAppDispatch();
  const { fees, loading, error } = useAppSelector((state) => state.fees);

  useEffect(() => {
    if (!fees && !loading && !error) {
      dispatch(fetchFees());
    }
  }, [dispatch, fees, loading, error]);

  return null;
}
