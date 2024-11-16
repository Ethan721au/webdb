import CountersConfig from "./CountersConfig/CountersConfig";
import LifeCounter from "./LifeCounter/LifeCounter";
import CommanderDamage from "./SpecialCounters/CommanderDamage/CommanderDamage";
import SpecialCounters from "./SpecialCounters/SpecialCounters";
import styles from "./counter.module.css";

export default function CountersCommander() {
  return (
    <>
      {/* <div className={styles.playerReverse}>
        <div className={styles.counters}>
          <LifeCounter />
          <SpecialCounters />
        </div>
        <div className={styles.countersReverse}>
          <LifeCounter />
          <SpecialCounters />
        </div>
      </div>
      <CountersConfig />
      <div className={styles.player}>
        <div className={styles.counters}>
          <LifeCounter />
          <SpecialCounters />
        </div>
        <div className={styles.countersReverse}>
          <LifeCounter />
          <SpecialCounters />
        </div>
      </div> */}
      <div
        style={{
          display: "flex",
          color: "white",
          height: "100%",
          position: "relative",
        }}
      >
        <div className={styles.players90}>
          <div className={styles.player}>
            <div>
              <SpecialCounters />
            </div>
            <div className={styles.lifecounters}>
              <div className={styles.life}>
                <div
                  style={{
                    height: "100%",
                    width: "150px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <LifeCounter />
                </div>
              </div>
            </div>
            <CommanderDamage player="bottomRight" />
          </div>
          <div style={{ height: "1px", backgroundColor: "white" }}></div>
          <div className={styles.player}>
            <div>
              <SpecialCounters />
            </div>
            <div className={styles.lifecounters}>
              <div className={styles.life}>
                <div
                  style={{
                    height: "100%",
                    width: "150px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <LifeCounter />
                </div>
              </div>
            </div>
            <CommanderDamage />
          </div>
        </div>
        <div className={styles.players270}>
          <div className={styles.player}>
            <div>
              <SpecialCounters />
            </div>
            <div className={styles.lifecounters}>
              <div className={styles.life}>
                <div
                  style={{
                    height: "100%",
                    width: "150px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <LifeCounter />
                </div>
              </div>
            </div>
            <CommanderDamage player="bottomRight" />
          </div>
          <div style={{ height: "1px", backgroundColor: "white" }}></div>
          <div className={styles.player}>
            <div>
              <SpecialCounters />
            </div>
            <div className={styles.lifecounters}>
              <div className={styles.life}>
                <div
                  style={{
                    height: "100%",
                    width: "150px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <LifeCounter />
                </div>
              </div>
            </div>
            <CommanderDamage />
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            top: "20%",
            bottom: "20%",
            right: "45%",
            backgroundColor: "black",
          }}
        >
          <CountersConfig />
        </div>
      </div>
    </>
  );
}
