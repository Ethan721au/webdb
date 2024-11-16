"use client";

import { useReset } from "@/hooks/useReset";
import styles from "./countersConfig.module.css";

export default function CountersConfig() {
  const { triggerReset } = useReset();

  return (
    <div className={styles.container}>
      <div
        style={{
          width: "30px",
          height: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: "14px", transform: "rotate(90deg)" }}>
          timer
        </div>
      </div>
      <button
        onClick={triggerReset}
        style={{
          width: "30px",
          height: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: "14px", transform: "rotate(90deg)" }}>
          reset
        </div>
      </button>
      <div
        style={{
          width: "30px",
          height: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: "14px", transform: "rotate(90deg)" }}>
          timer
        </div>
      </div>
      <div
        style={{
          width: "30px",
          height: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: "14px", transform: "rotate(90deg)" }}>
          timer
        </div>
      </div>
      <div
        style={{
          width: "30px",
          height: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: "14px", transform: "rotate(90deg)" }}>
          timer
        </div>
      </div>
    </div>
  );
}
