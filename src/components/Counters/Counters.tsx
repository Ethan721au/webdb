import CountersConfig from "./CountersConfig/CountersConfig";
import LifeCounter from "./LifeCounter/LifeCounter";
import SpecialCounters from "./SpecialCounters/SpecialCounters";
import styles from "./counter.module.css";

export default function Counters() {
  return (
    <>
      <div className={styles.playerReverse}>
        <div className={styles.counters}>
          <LifeCounter />
          <SpecialCounters />
        </div>
        {/* <div className={styles.countersReverse}>
          <LifeCounter reset={reset} />
          <SpecialCounters />
        </div> */}
      </div>
      <CountersConfig />
      <div className={styles.player}>
        <div className={styles.counters}>
          <LifeCounter />
          <SpecialCounters />
        </div>
        {/* <div className={styles.countersReverse}>
          <LifeCounter reset={reset} />
          <SpecialCounters />
        </div> */}
      </div>
    </>
  );
}
