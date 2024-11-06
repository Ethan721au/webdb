import { useState } from "react";
import styles from "./lifeCounter.module.css";
import IncrementButton from "./IncrementButton/IncrementButton";

const maxIncrement = 5;
const minIncrement = 1;

export default function LifeCounter({ isReverse }: { isReverse?: boolean }) {
  const [life, setLife] = useState(20);
  console.log("isReverse", isReverse);

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
