import CountersConfig from "./CountersConfig/CountersConfig";
import LifeCounter from "./LifeCounter/LifeCounter";
import CommanderDamage from "./SpecialCounters/CommanderDamage/CommanderDamage";
import SpecialCounters from "./SpecialCounters/SpecialCounters";
import styles from "./counter.module.css";
import styled from "styled-components";
import { useState } from "react";

const shouldForwardProp = (prop: string) => prop !== "startingPlayer";

const Overlay = styled.div.withConfig({
  shouldForwardProp,
})<{ startingPlayer: boolean }>`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 2;
  pointer-events: none;
  animation: ${({ startingPlayer }) =>
    startingPlayer ? "highlight 0.3s infinite ease-in-out" : "none"};

  @keyframes highlight {
    0% {
      background-color: white;
      opacity: 0;
    }
    50% {
      background-color: white;
      opacity: 1;
    }
    100% {
      background-color: white;
      opacity: 0;
    }
  }
`;

const defaultStartingPlayer = [
  {
    player: "player1",
    startingPlayer: false,
  },
  {
    player: "player2",
    startingPlayer: false,
  },
  {
    player: "player3",
    startingPlayer: false,
  },
  {
    player: "player4",
    startingPlayer: false,
  },
];

export default function CountersCommander() {
  const [startingPlayer, setStartingPlayer] = useState(defaultStartingPlayer);
  const [display, setDisplay] = useState(false);

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
          <div
            className={styles.player}
            onClick={() => {
              setDisplay(!display);
            }}
          >
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
            <CommanderDamage player="bottomRight" display={display} />
            <Overlay startingPlayer={startingPlayer[0].startingPlayer} />
          </div>
          <div style={{ height: "1px", backgroundColor: "white" }}></div>
          <div
            className={styles.player}
            onClick={() => {
              setDisplay(!display);
            }}
          >
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
            <CommanderDamage display={display} />
            <Overlay startingPlayer={startingPlayer[2].startingPlayer} />
          </div>
        </div>
        <div className={styles.players270}>
          <div
            className={styles.player}
            onClick={() => {
              setDisplay(!display);
            }}
          >
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
            <CommanderDamage player="bottomRight" display={display} />
            <Overlay startingPlayer={startingPlayer[3].startingPlayer} />
          </div>
          <div style={{ height: "1px", backgroundColor: "white" }}></div>
          <div
            className={styles.player}
            onClick={() => {
              setDisplay(!display);
            }}
          >
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
            <CommanderDamage display={display} />
            <Overlay startingPlayer={startingPlayer[1].startingPlayer} />
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
          <CountersConfig setStartingPlayer={setStartingPlayer} />
        </div>
      </div>
    </>
  );
}
