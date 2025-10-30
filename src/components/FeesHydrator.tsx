"use client";

import { useEffect } from "react";
import { useAppDispatch } from "@/lib/hooks";
import { setFees } from "@/store/feesSlice";
import { FeeSchedule } from "@/types/global";

export default function FeesHydrator({
  initialFees,
}: {
  initialFees: FeeSchedule;
}) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setFees(initialFees));
  }, [dispatch, initialFees]);

  return null;
}
