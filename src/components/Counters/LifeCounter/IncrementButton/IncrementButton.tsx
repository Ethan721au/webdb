import styles from "./incrementButton.module.css";

export default function IncrementButton({
  updateLife,
  increment,
}: {
  updateLife: (increment: number) => void;
  increment: number;
}) {
  return (
    <div className={styles.increments}>
      <button onClick={() => updateLife(increment)}>+</button>
      <div>{increment}</div>
      <button onClick={() => updateLife(-increment)}>-</button>
    </div>
  );
}
