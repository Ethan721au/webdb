"use client";

import { useEffect, useState } from "react";
import styles from "./home.module.css";
// import { deletePlayer, updatePlayer } from "@/services/playerService";
// import { calculateElo } from "@/lib/calculatePlayerElo";
// import { calculateWinRates } from "@/lib/calculateWinRates";
// import { updateLeaderboardEntry } from "@/lib/updateLeaderboardEntry";
// import { determineEloExchange } from "@/lib/calculateEloExchange";

// import { Player } from "@/types";

export default function Home() {
  // const [games, setGames] = useState([]);
  const [players, setPlayers] = useState([]);
  console.log(players, "players");

  useEffect(() => {
    // getAllGames();
    getAllPlayers();
  }, []);

  // const getAllGames = async () => {
  //   const data = await fetch("http://localhost:3000/api/games", {
  //     method: "GET",
  //   });

  //   const { games } = await data.json();
  //   setGames(games);
  // };

  const getAllPlayers = async () => {
    const data = await fetch("http://localhost:3000/api/players", {
      method: "GET",
    });

    const { players } = await data.json();
    setPlayers(players);
  };

  // const getLeaderboard = () => {
  //   const test = players
  //     .sort(
  //       (a, b) =>
  //         a.leaderboard[0].overall_points! - b.leaderboard[0].overall_points!
  //     )
  //     .reverse();

  //   test.map((player) => {
  //     const rank = test.indexOf(player) + 1;

  //     const updatedLeaderboard = player.leaderboard.map((entry) => {
  //       if (entry.season === 8) {
  //         return {
  //           ...entry,
  //           rank: rank,
  //         };
  //       }
  //       return entry;
  //     });

  //     const updatedPlayer = {
  //       ...player,
  //       leaderboard: updatedLeaderboard,
  //     };

  //     const message = updatePlayer(updatedPlayer);
  //   });
  // };

  // const deletePP = () => {
  //   const test = players[0];
  //   console.log(test._id, "test");
  //   const message = deletePlayer(test);
  //   console.log(message, "message");
  // };

  return (
    <div className={styles.container}>
      {/* <button onClick={deletePP}>test</button> */}
    </div>
  );
}
