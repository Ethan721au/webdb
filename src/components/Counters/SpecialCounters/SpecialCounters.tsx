import CounterTypes from "./CounterTypes/CounterTypes";
import styles from "./specialCounter.module.css";

export default function SpecialCounters() {
  return (
    <div className={styles.container}>
      <CounterTypes />
      <CounterTypes />
      <CounterTypes />
      <CounterTypes />
    </div>
  );
}
