import { Player } from "@/types";
import React from "react";
import styles from "./scores.module.css";

export default function Scores({ players }: { players: Player[] }) {
  const scores = [...players.sort((a, b) => a.elo! - b.elo!)]
    .reverse()
    .map((player, idx) => (
      <div key={idx}>
        <div className={styles.row}>
          <div
            className={`${styles.name} ${idx === 0 ? styles.first : idx === 1 ? styles.second : idx === 2 ? styles.third : ""}`}
          >
            {player.first_name}
          </div>
          <div className={styles.score}>{player.elo}</div>
        </div>
      </div>
    ));

  return (
    <div className={styles.container}>
      <div className={styles.header}>Scores</div>
      <div className={styles.table}>{scores}</div>
    </div>
  );
}
