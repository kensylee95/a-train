"use server";

import { FeesApiResponse, FXRateApiResponse } from "@/types/global";
import { getBaseUrl } from "@/utils/baseUrl";

export async function getFees(): Promise<FeesApiResponse> {
  const baseUrl = await getBaseUrl();
  const res = await fetch(`${baseUrl}/api/get-fees`, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch fees");
  }
  return (await res.json()) as FeesApiResponse;
}

// Fetch real FX rate
export async function getFxRate({
  from,
  to,
}: {
  from: string;
  to: string;
}): Promise<FXRateApiResponse> {
  const baseUrl = await getBaseUrl();

  try {
    const url = `${baseUrl}/api/get-fx-rate?from=${encodeURIComponent(
      from
    )}&to=${encodeURIComponent(to)}`;
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) {
      throw new Error("Failed to fetch FX rate");
    }
    const json = await res.json();
    return json as FXRateApiResponse;
  } catch (err) {
    throw err;
  }
}
