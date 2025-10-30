import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://2kbbumlxz3.execute-api.us-east-1.amazonaws.com/default/exchange?from=USD&to=NGN"
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch FX rate" },
        { status: 500 }
      );
    }
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch FX rate" + error },
      { status: 500 }
    );
  }
}
