"use client";

import { useEffect, useState } from "react";
import styles from "./home.module.css";
// import { calculateElo } from "@/lib/calculatePlayerElo";
// import { calculateWinRates } from "@/lib/calculateWinRates";
// import { updateLeaderboardEntry } from "@/lib/updateLeaderboardEntry";
// import { determineEloExchange } from "@/lib/calculateEloExchange";

// import { Player } from "@/types";

// const draw = false;
// const season = 8;

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

  // const updatePlayer = async () => {
  //   const playersToUpdate = players.filter(
  //     (player) => player.first_name === "Eric" || player.first_name === "Jane"
  //   );

  //   const [winner, loser] = [playersToUpdate[0], playersToUpdate[1]];
  //   console.log(winner, "winner");
  //   const eloExchange = determineEloExchange(winner!.elo!, loser!.elo!);

  //   const updatedOpponents = [winner, loser].map((player) => {
  //     const updatedPlayer = [winner, loser].map((player) => {
  //       const opponent = player === winner ? loser : winner;
  //       if (
  //         !player.winRates?.vs ||
  //         !player.winRates?.vs.find((p) => p.player === opponent?.first_name)
  //       ) {
  //         const newVs = {
  //           player: opponent?.first_name,
  //           wins: 0,
  //           losses: 0,
  //           winRate: 0,
  //         };

  //         const updatedPlayer = {
  //           ...player,
  //           winRates: {
  //             ...player.winRates,
  //             vs: [...player.winRates?.vs, newVs],
  //           },
  //         };

  //         return updatedPlayer;
  //       }

  //       return player;
  //     });

  //     console.log(updatedPlayer, "updatedPlayer");
  //     return {
  //       ...player,
  //       elo: calculateElo(player, eloExchange, draw, winner),
  //       winRates: draw
  //         ? player.winRates
  //         : calculateWinRates(player, updatedPlayer),
  //       leaderboard: player?.leaderboard?.map((entry) =>
  //         updateLeaderboardEntry(entry, player, season, draw, winner, loser)
  //       ),
  //     };
  //   });

  //   console.log(updatedOpponents, "updatedOpponents");
  // };

  return (
    <div className={styles.container}>
      <button>test</button>
    </div>
  );
}
