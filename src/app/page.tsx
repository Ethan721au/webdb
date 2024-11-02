"use client";

// import GamesSummary from "@/components/GamesSummary/GamesSummary";
// import Scores from "@/components/Scores/Scores";
import { useState, useEffect } from "react";
import styles from "./home.module.css";
import { playersSeed } from "@/config/seeds/playersSeed";
import { determineEloExchange } from "@/lib/calculateEloExchange";
import { calculateWinRates } from "@/lib/calculateWinRates";
import { Player } from "@/types";
// import PlayerForm from "@/components/PlayerForm/PlayerForm";

export default function Home() {
  const [games, setGames] = useState([]);
  const [players, setPlayers] = useState([]);
  // const [message, setMessage] = useState("");
  const [message2, setMessage2] = useState("");
  const [winner, setWinner] = useState(playersSeed[0]);
  const [loser, setLoser] = useState(playersSeed[4]);
  const [draw, setDraw] = useState(true);

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

  const recordResult = async () => {
    const gameDetails = {
      season: 8,
      opponents: [winner, loser],
      isDraw: draw ? true : false,
      winner: draw ? null : winner,
      loser: draw ? null : loser,
      eloExchange: draw ? null : determineEloExchange(winner.elo!, loser.elo!),
    };

    const updatedOpponents = gameDetails.opponents.map((player) => {
      return {
        ...player,
        elo: draw
          ? player.elo
          : player === gameDetails.winner
            ? player.elo! + gameDetails!.eloExchange!
            : player.elo! - gameDetails!.eloExchange!,
        winRates: draw
          ? player.winRates
          : calculateWinRates(player, gameDetails.winner, gameDetails.loser),
        leaderboard: player.leaderboard?.map((entry) => {
          if (entry.season !== gameDetails.season) return entry;
          return {
            ...entry,
            matchesPlayed: entry.matchesPlayed + 1,
            wins: draw
              ? entry.wins
              : player === gameDetails.winner
                ? entry.wins + 1
                : entry.wins,
            losses: draw
              ? entry.losses
              : player === gameDetails.loser
                ? entry.losses + 1
                : entry.losses,
            draws: draw ? entry.draws + 1 : entry.draws,
            overall_points: draw
              ? entry.overall_points + 1
              : player === gameDetails.winner
                ? entry.overall_points + 3
                : entry.overall_points,
          };
        }),
      };
    });

    console.log(updatedOpponents, "updatedOpponents");
    console.log(gameDetails, "gameDetails");

    // const updatedPlayer1 = {
    //   ...loser,
    //   elo: loser.elo! + gameDetails.eloExchange,
    //   winRates: calculateWinRates(winner, loser),
    //   leaderboard: playersSeed[4].leaderboard?.map((entry) => {
    //     if (entry.season !== gameDetails.season) return entry;
    //     return {
    //       ...entry,
    //       matchesPlayed: entry.matchesPlayed + 1,
    //       wins: entry.wins + 1,
    //       overall_points: entry.overall_points + 3,
    //     };
    //   }),
    // };

    // console.log(updatedPlayer1);

    // const data = await fetch("http://localhost:3000/api/games", {
    //   method: "POST",
    //   body: JSON.stringify(gameDetails),
    // });
    // const message = await data.json();
    // setMessage(message);

    // const testest = await fetch("http://localhost:3000/api/players", {
    //   method: "PUT",
    //   body: JSON.stringify(updatedPlayer1),
    // });
    // const player = await testest.json();
    // setMessage2(player);
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
