"use client";

import GamesSummary from "@/components/GamesSummary/GamesSummary";
import Scores from "@/components/Scores/Scores";
import { useEffect, useState } from "react";
import styles from "./home.module.css";

export default function Home() {
  const [games, setGames] = useState([]);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    getAllGames();
    getAllPlayers();
  }, []);

  const getAllGames = async () => {
    const data = await fetch("http://localhost:3000/api/games", {
      method: "GET",
    });

    const { games } = await data.json();
    setGames(games);
  };

  const getAllPlayers = async () => {
    const data = await fetch("http://localhost:3000/api/players", {
      method: "GET",
    });

    const { players } = await data.json();
    setPlayers(players);
  };

  return (
    <div className={styles.container}>
      <Scores players={players} />
      <GamesSummary games={games} />
    </div>
  );
}
