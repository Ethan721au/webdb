"use client";

// import GamesSummary from "@/components/GamesSummary/GamesSummary";
// import Scores from "@/components/Scores/Scores";
import { useEffect } from "react";
import styles from "./home.module.css";
import { playersSeed } from "@/config/seeds/playersSeed";
import { determineEloExchange } from "@/lib/calculateEloExchange";
import { calculateWinRates } from "@/lib/calculateWinRates";
import { Player } from "@/types";
// import PlayerForm from "@/components/PlayerForm/PlayerForm";

export default function Home() {
  // const [games, setGames] = useState([]);
  // const [players, setPlayers] = useState([]);
  // const [message, setMessage] = useState("");
  // const [message2, setMessage2] = useState("");
  // const [winner, setWinner] = useState(playersSeed[0]);
  // const [loser, setLoser] = useState(playersSeed[4]);
  // const [draw, setDraw] = useState(false);

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

  const updatePlayer = async (players: Player[]) => {
    players.map(async (player) => {
      const res = await fetch("http://localhost:3000/api/players", {
        method: "PUT",
        body: JSON.stringify(player),
      });
      const message = await res.json();
      console.log(message, "message players");
    });
  };

  /*
BETTER than below:

const recordResult = async () => {
  const [winner, loser] = [playersSeed[0], playersSeed[4]];
  const draw = false;
  const season = 8;
  const eloExchange = determineEloExchange(winner.elo!, loser.elo!);

  const calculateElo = (player: Player) =>
    draw ? player.elo : player === winner ? player.elo! + eloExchange! : player.elo! - eloExchange!;

  const updateLeaderboardEntry = (entry: Leaderboard, player: Player) => {
    if (entry.season !== season) return entry;
    return {
      ...entry,
      matchesPlayed: entry.matchesPlayed + 1,
      wins: draw ? entry.wins : player === winner ? entry.wins + 1 : entry.wins,
      losses: draw ? entry.losses : player === loser ? entry.losses + 1 : entry.losses,
      draws: draw ? entry.draws + 1 : entry.draws,
      overall_points: draw ? entry.overall_points + 1 : player === winner ? entry.overall_points + 3 : entry.overall_points,
    };
  };

  const updatedOpponents = [winner, loser].map((player) => ({
    ...player,
    elo: calculateElo(player),
    winRates: draw ? player.winRates : calculateWinRates(player, winner, loser),
    leaderboard: player.leaderboard?.map((entry) => updateLeaderboardEntry(entry, player)),
  }));

  // Return or process `updatedOpponents` as needed
};


*/

  const recordResult = async () => {
    const opponents = [playersSeed[0], playersSeed[4]];
    const draw = false;
    const eloExchange = determineEloExchange(
      opponents[0].elo!,
      opponents[1].elo!
    );
    const season = 8;
    const winner = opponents[0];
    const loser = opponents[1];

    const updatedOpponents = opponents.map((player) => {
      return {
        ...player,
        elo: draw
          ? player.elo
          : player === winner
            ? player.elo! + eloExchange!
            : player.elo! - eloExchange!,
        winRates: draw
          ? player.winRates
          : calculateWinRates(player, winner!, loser!),
        leaderboard: player.leaderboard?.map((entry) => {
          if (entry.season !== season) return entry;
          return {
            ...entry,
            matchesPlayed: entry.matchesPlayed + 1,
            wins: draw
              ? entry.wins
              : player === winner
                ? entry.wins + 1
                : entry.wins,
            losses: draw
              ? entry.losses
              : player === loser
                ? entry.losses + 1
                : entry.losses,
            draws: draw ? entry.draws + 1 : entry.draws,
            overall_points: draw
              ? entry.overall_points + 1
              : player === winner
                ? entry.overall_points + 3
                : entry.overall_points,
          };
        }),
      };
    });

    const gameDetails = {
      season: season,
      opponents: updatedOpponents,
      isDraw: draw ? true : false,
      winner: draw
        ? null
        : updatedOpponents.find((player) => player === winner),
      loser: draw ? null : updatedOpponents.find((player) => player === loser),
      eloExchange: draw ? null : eloExchange,
    };

    console.log(updatedOpponents, "updatedOpponents");
    console.log(gameDetails, "gameDetails");

    const data = await fetch("http://localhost:3000/api/games", {
      method: "POST",
      body: JSON.stringify(gameDetails),
    });
    const message = await data.json();
    console.log(message, "message game");

    updatePlayer(updatedOpponents);

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
      {/* <div>{message2}</div> */}
    </div>
  );
}
