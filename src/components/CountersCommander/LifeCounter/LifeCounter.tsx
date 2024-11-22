import { useEffect, useRef, useState } from "react";
import styles from "./lifeCounter.module.css";
import IncrementButton from "./IncrementButton/IncrementButton";
import { useReset } from "@/hooks/useReset";

const playersStartingLife = 20;

const maxIncrement = 5;
const minIncrement = 1;

export default function LifeCounter() {
  const { reset } = useReset();
  const [life, setLife] = useState(playersStartingLife);
  const [increment, setIncrement] = useState(0);
  const currentTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    resetCounters();
  }, [reset]);

  const updateLife = (increment: number) => {
    setLife((prevLife) => prevLife + increment);
    displayIncrement(increment);
  };

  const displayIncrement = (increment: number) => {
    if (currentTimeout.current) {
      clearTimeout(currentTimeout.current);
    }
    setIncrement((p) => p + increment);
    const timeout = setTimeout(() => {
      setIncrement(0);
    }, 1500);
    currentTimeout.current = timeout;
  };

  const resetCounters = () => {
    setLife(playersStartingLife);
    setIncrement(0);
  };

  return (
    <div className={styles.container}>
      <IncrementButton updateLife={updateLife} increment={minIncrement} />
      {increment !== 0 && <div className={styles.increment}>{increment}</div>}
      <div className={styles.lifeCounter}>
        <div
          style={{
            fontSize: "90px",
            transform: "rotate(90deg)",
          }}
        >
          {life}
        </div>
      </div>
      <IncrementButton updateLife={updateLife} increment={maxIncrement} />
    </div>
  );
}