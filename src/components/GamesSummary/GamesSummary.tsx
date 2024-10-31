import { Game } from "@/types";
import React from "react";
import styles from "./recentGames.module.css";
import { formatDate } from "@/lib/dateFormatter";

export default function GamesSummary({ games }: { games: Game[] }) {
  const recentMatches = [...games].reverse().map((game, idx) => (
    <div key={idx}>
      <div className={styles.row}>
        <div className={styles.winner}>{game.opponents.player1.first_name}</div>
        <div className={styles.eloExchange}>{game.eloExchange}</div>
        <div className={styles.loser}>{game.opponents.player2.first_name}</div>
        <div className={styles.date}>{formatDate(game.createdAt)}</div>
      </div>
    </div>
  ));

  return (
    <div className={styles.container}>
      <div className={styles.header}>Recent matches</div>
      <div className={styles.table}>{recentMatches}</div>
    </div>
  );
}
