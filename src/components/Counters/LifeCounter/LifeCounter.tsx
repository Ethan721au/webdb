import { useEffect, useRef, useState } from "react";
import styles from "./lifeCounter.module.css";
import IncrementButton from "./IncrementButton/IncrementButton";
import { useReset } from "@/hooks/useReset";
import CommanderDamage from "../SpecialCounters/CommanderDamage/CommanderDamage";

const playersStartingLife = 20;

const maxIncrement = 5;
const minIncrement = 1;

export default function LifeCounter() {
  const { reset } = useReset();
  const [life, setLife] = useState(playersStartingLife);
  // const [commander, setCommander] = useState(true);
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
      <IncrementButton updateLife={updateLife} increment={maxIncrement} />
      {increment !== 0 && <div className={styles.increment}>{increment}</div>}
      <CommanderDamage />
      <div className={styles.lifeCounter}>{life}</div>
      <IncrementButton updateLife={updateLife} increment={minIncrement} />
    </div>
  );
}
