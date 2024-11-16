"use client";

import { ResetProvider } from "@/hooks/useReset";
// import { useEffect, useState } from "react";
import styles from "./home.module.css";
// import LifeCounter from "@/components/Counters/LifeCounter/LifeCounter";
// import SpecialCounters from "@/components/Counters/SpecialCounters/SpecialCounters";
// import CountersConfig from "@/components/Counters/CountersConfig/CountersConfig";
// import Die from "@/components/Die/Die";
import Counters from "@/components/Counters/Counters";
import CountersCommander from "@/components/CountersCommander/CountersCommander";
// import { deletePlayer, updatePlayer } from "@/services/playerService";
// import { calculateElo } from "@/lib/calculatePlayerElo";
// import { calculateWinRates } from "@/lib/calculateWinRates";
// import { updateLeaderboardEntry } from "@/lib/updateLeaderboardEntry";
// import { determineEloExchange } from "@/lib/calculateEloExchange";

// import { Player } from "@/types";

export default function Home() {
  // const [games, setGames] = useState([]);
  // const [players, setPlayers] = useState([]);
  // const [test, setTest] = useState(0);
  // console.log(test);
  // useEffect(() => {
  //   getAllGames();
  //   getAllPlayers();
  // }, []);

  // const updateLife = (increment: number) => {
  //   setLife((prevLife) => prevLife + increment);
  // };

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
    // <div className={styles.container}>
    //   <ResetProvider>
    //     <Counters />
    //   </ResetProvider>
    // </div>
    <div className={styles.containerCommander}>
      <ResetProvider>
        <CountersCommander />
      </ResetProvider>
    </div>
  );
}
