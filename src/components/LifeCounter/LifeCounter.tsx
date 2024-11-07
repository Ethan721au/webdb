import { useState } from "react";
import styles from "./lifeCounter.module.css";
import IncrementButton from "./IncrementButton/IncrementButton";

const maxIncrement = 5;
const minIncrement = 1;

export default function LifeCounter({
  startingLife,
}: {
  startingLife: number;
}) {
  const [life, setLife] = useState(startingLife);

  const updateLife = (increment: number) => {
    setLife((prevLife) => prevLife + increment);
  };

  return (
    <div className={styles.container}>
      <IncrementButton updateLife={updateLife} increment={maxIncrement} />
      <div className={styles.lifeCounter}>{life}</div>
      <IncrementButton updateLife={updateLife} increment={minIncrement} />
    </div>
  );
}
