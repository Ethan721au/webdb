"use client";

import { useReset } from "@/hooks/useReset";
import styles from "./countersConfig.module.css";

export default function CountersConfig() {
  const { triggerReset } = useReset();

  return (
    <div className={styles.container}>
      <div>timer</div>
      <button onClick={triggerReset}>reset</button>
      <div>config</div>
      <div>config</div>
      <div>config</div>
    </div>
  );
}
