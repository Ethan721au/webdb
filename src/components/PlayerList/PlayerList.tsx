import { useState } from "react";
import styles from "./playerList.module.css";
import { Player } from "@/types";

export default function PlayerList({
  players,
  callback,
}: {
  players: Player[];
  callback: (player: Player | undefined) => void;
}) {
  const [selectedPlayer, setSelectedPlayer] = useState("");

  const returnPlayer = (playerName: string) => {
    const player = players.find((player) => player.first_name === playerName);
    return player;
  };

  return (
    <div className={styles.container}>
      {players
        .map((player) => player.first_name)
        .sort()
        .map((playerName, idx) => (
          <button
            key={idx}
            className={`${styles.playerSelector} ${selectedPlayer === playerName ? styles.selected : ""}`}
            onClick={() => {
              callback(returnPlayer(playerName));
              setSelectedPlayer(playerName);
            }}
          >
            {playerName}
          </button>
        ))}
    </div>
  );
}
