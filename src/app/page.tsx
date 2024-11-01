"use client";

// import GamesSummary from "@/components/GamesSummary/GamesSummary";
// import Scores from "@/components/Scores/Scores";
import { useState } from "react";
import styles from "./home.module.css";
import { playersSeed } from "@/config/seeds/playersSeed";
import { determineEloExchange } from "@/lib/calculateEloExchange";
// import PlayerForm from "@/components/PlayerForm/PlayerForm";

export default function Home() {
  // const [games, setGames] = useState([]);
  // const [players, setPlayers] = useState([]);
  // const [message, setMessage] = useState("");
  const [message2, setMessage2] = useState("");

  // useEffect(() => {
  //   getAllGames();
  //   getAllPlayers();
  // }, []);

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

  const recordResult = async () => {
    const gameDetails = {
      season: 8,
      opponents: { player1: playersSeed[0], player2: playersSeed[4] },
      winner: playersSeed[0],
      eloExchange: determineEloExchange(
        playersSeed[0].elo!,
        playersSeed[4].elo!
      ),
    };

    console.log(gameDetails);

    const updatedPlayer1 = {
      ...playersSeed[4],
      elo: playersSeed[4].elo! + gameDetails.eloExchange,
      leaderboard: playersSeed[4].leaderboard?.map((entry) => {
        if (entry.season !== gameDetails.season) return entry;
        return {
          ...entry,
          matchesPlayed: entry.matchesPlayed + 1,
          wins: entry.wins + 1,
          overall_points: entry.overall_points + 3,
        };
      }),
    };

    console.log(updatedPlayer1, "updatedPlayer1");

    // const data = await fetch("http://localhost:3000/api/games", {
    //   method: "POST",
    //   body: JSON.stringify(gameDetails),
    // });
    // const message = await data.json();
    // setMessage(message);

    const testest = await fetch("http://localhost:3000/api/players", {
      method: "PUT",
      body: JSON.stringify(updatedPlayer1),
    });
    const player = await testest.json();
    setMessage2(player);
  };

  return (
    <div className={styles.container}>
      {/* <Scores players={players} />
      <GamesSummary games={games} /> */}
      {/* <PlayerForm /> */}
      <button onClick={recordResult}>test</button>
      {/* <div>{message}</div> */}
      <div>{message2}</div>
    </div>
  );
}
