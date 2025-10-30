import { NextResponse } from "next/server";
import { FeesApiResponse } from "@/types/global";

export async function GET() {
  try {
    const response = await fetch(
      "https://2kbbumlxz3.execute-api.us-east-1.amazonaws.com/default/fee",
      { cache: "no-store" }
    );
    if (!response.ok) {
      return NextResponse.json(
        { error: "Upstream fee service error" },
        { status: 502 }
      );
    }
    const data = (await response.json()) as FeesApiResponse;
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch fees" + error },
      { status: 500 }
    );
  }
}
