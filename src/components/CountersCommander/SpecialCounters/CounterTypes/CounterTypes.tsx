"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./counterTypes.module.css";
import { useReset } from "@/hooks/useReset";

export default function CounterTypes() {
  const { reset } = useReset();
  const [isLongPress, setIsLongPress] = useState(false);
  const [value, setValue] = useState(0);
  const longPressTimeout = useRef<NodeJS.Timeout | null>(null);

  const longPressDuration = 500;

  useEffect(() => {
    resetCounters();
  }, [reset]);

  const resetCounters = () => {
    setValue(0);
  };

  const startPress = () => {
    if (longPressTimeout.current) {
      clearTimeout(longPressTimeout.current);
    }
    longPressTimeout.current = setTimeout(() => {
      setIsLongPress(true);
      setValue(0);
    }, longPressDuration);
  };

  const endPress = () => {
    if (longPressTimeout.current) {
      clearTimeout(longPressTimeout.current);
    }
    if (isLongPress) {
    } else {
      setValue((prev) => prev + 1);
    }
    setIsLongPress(false);
  };
  return (
    <button
      className={styles.container}
      onMouseDown={startPress}
      onMouseUp={endPress}
      // onTouchStart={startPress} // For touch devices
      // onTouchEnd={endPress} // For touch devices
    >
      <div>{value}</div>
    </button>
  );
}
