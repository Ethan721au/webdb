"use client";

import { useEffect } from "react";
import styles from "./home.module.css";

// import { Player } from "@/types";

export default function Home() {
  // const [games, setGames] = useState([]);
  // const [players, setPlayers] = useState([]);

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

  // const updatePlayer = async () => {

  //   const playersToUpdate = players.filter(
  //     (player) => player.first_name === "Eric" || player.first_name === "Jane"
  //   );

  //   console.log(playersToUpdate, "playersToUpdate");
  //   const [winner, loser] = [playersToUpdate[0], playersToUpdate[1]];

  //   playersToUpdate.map((player) => {
  //     const opponent = player === winner ? loser : winner;
  //     console.log(player, "player");
  //     console.log("ok");
  //     if (
  //       !player.winRates?.vs ||
  //       !player.winRates?.vs.find((p) => p.player === opponent?.first_name)
  //     ) {
  //       console.log(player.first_name, "player.first_name");

  //       const newVs = {
  //         player: opponent?.first_name,
  //         wins: 0,
  //         losses: 0,
  //         winRate: 0,
  //       };

  //       const updatedPlayer = {
  //         ...player,
  //         winRates: {
  //           ...player.winRates,
  //           vs: [...player.winRates?.vs, newVs],
  //         },
  //       };

  //       console.log(updatedPlayer, "updatedPlayer");
  //     }
  //   });

  // };

  return (
    <div className={styles.container}>
      {/* <button onClick={updatePlayer}>test</button> */}
    </div>
  );
}
