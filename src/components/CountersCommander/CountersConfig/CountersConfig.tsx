"use client";

import { useReset } from "@/hooks/useReset";
import styles from "./countersConfig.module.css";

type StartingPlayer = {
  player: string;
  startingPlayer: boolean;
};

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

const buffer = 1500;
const animationDuration = 300;
const minTurns = 8;

export default function CountersConfig({
  setStartingPlayer,
}: {
  setStartingPlayer: React.Dispatch<React.SetStateAction<StartingPlayer[]>>;
}) {
  const { triggerReset } = useReset();

  const test = () => {
    const randomIndex = Math.floor(
      Math.random() * defaultStartingPlayer.length
    );

    const count = minTurns + randomIndex;

    setTimeout(
      () => {
        setStartingPlayer(defaultStartingPlayer);
      },
      count * animationDuration + buffer
    );

    for (let i = 0; i < count; i++) {
      setTimeout(() => {
        setStartingPlayer((prevState) => {
          return prevState.map((player, idx) => {
            if (idx === i % defaultStartingPlayer.length) {
              return { ...player, startingPlayer: true };
            } else {
              return { ...player, startingPlayer: false };
            }
          });
        });
      }, i * animationDuration);
    }
  };

  return (
    <div className={styles.container}>
      <div
        style={{
          width: "30px",
          height: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: "14px", transform: "rotate(90deg)" }}>
          timer
        </div>
      </div>
      <button
        onClick={triggerReset}
        style={{
          width: "30px",
          height: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: "14px", transform: "rotate(90deg)" }}>
          reset
        </div>
      </button>
      <button
        onClick={test}
        style={{
          width: "30px",
          height: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: "14px", transform: "rotate(90deg)" }}>
          starting
        </div>
      </button>
      <div
        style={{
          width: "30px",
          height: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: "14px", transform: "rotate(90deg)" }}>
          timer
        </div>
      </div>
      <div
        style={{
          width: "30px",
          height: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: "14px", transform: "rotate(90deg)" }}>
          timer
        </div>
      </div>
    </div>
  );
}
