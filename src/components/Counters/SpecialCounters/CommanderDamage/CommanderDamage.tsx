import styles from "./commanderDamage.module.css";

export default function CommanderDamage() {
  const value = 5;

  return (
    <div onClick={() => console.log("dfsfsd")} className={styles.container}>
      <div className={styles.topSection}>
        <button className={styles.player1}>{value}</button>
        <button className={styles.player1}>{value}</button>
      </div>
      <div className={styles.bottomSection}>
        <button className={styles.player1}>{value}</button>
      </div>
    </div>
  );
}
