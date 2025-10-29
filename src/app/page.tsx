import { getFees } from "@/features/FeeFeature/actions/get-fees";
import { FeeFeature } from "@/features/FeeFeature/FeeFeature";
import { notFound } from "next/navigation";

export default async function FeePage() {
  const fees = await getFees();
  if (!fees) return notFound();
  return <FeeFeature  />;
}
