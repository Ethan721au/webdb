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
      <button
        onClick={() => updateLife(-increment)}
        style={{ transform: "rotate(90deg)", fontSize: "20px" }}
      >
        -
      </button>
      <div style={{ transform: "rotate(90deg)", fontSize: "20px" }}>
        {increment}
      </div>
      <button
        onClick={() => updateLife(increment)}
        style={{ transform: "rotate(90deg)", fontSize: "20px" }}
      >
        +
      </button>
    </div>
  );
}
