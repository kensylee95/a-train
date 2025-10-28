import { getFees } from "@/features/FeeFeature/actions/get-fees";
import { FeeFeature } from "@/features/FeeFeature/FeeFeature";
import { notFound } from "next/navigation";

export default async function FeePage() {
  const fees = await getFees();
  if (!fees) return notFound();
  console.log(fees.Business["Wallet to Wallet Transfer"]);
  return <FeeFeature fees={fees} />;
}
