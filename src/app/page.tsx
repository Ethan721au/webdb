"use client";

import { useEffect } from "react";
import styles from "./home.module.css";
// import { deletePlayer, updatePlayer } from "@/services/playerService";
// import { calculateElo } from "@/lib/calculatePlayerElo";
// import { calculateWinRates } from "@/lib/calculateWinRates";
// import { updateLeaderboardEntry } from "@/lib/updateLeaderboardEntry";
// import { determineEloExchange } from "@/lib/calculateEloExchange";

// import { Player } from "@/types";

export default function Home() {
  // const [games, setGames] = useState([]);
  // const [players, setPlayers] = useState([]);
  // console.log(players, "players");

  useEffect(() => {
    // getAllGames();
    // getAllPlayers();
  }, []);

  // const getAllGames = async () => {
  //   const data = await fetch("http://localhost:3000/api/games", {
  //     method: "GET",
  //   });

  //   const { games } = await data.json();
  //   setGames(games);
  // };

  // const getAllPlayers = async () => {
  //   const data = await fetch("http://localhost:3000/api/players", {
  //     method: "GET",
  //   });

  //   const { players } = await data.json();
  //   setPlayers(players);
  // };

  return (
    <div className={styles.container}>
      <button>test</button>
    </div>
  );
}
