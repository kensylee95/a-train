"use client";
import { useState } from "react";
import styles from "./FeeFeature.module.scss";

export function FeeFeature({ fees }: { fees: FeesInterface }) {
  const [serviceFees, setServiceFees] = useState(fees);

  return <div className={styles.container}>//</div>;
}
