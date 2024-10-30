"use client";

import PlayerList from "@/components/PlayerList/PlayerList";
// import Testing from "@/components/Testing/Testing";
import { Player } from "@/types";
import { useEffect, useState } from "react";

export default function Home() {
  const [players, setPlayers] = useState([]);
  const [remainingPlayers, setRemainingPlayers] = useState([]);
  const [winner, setWinner] = useState<Player>();
  const [loser, setLoser] = useState<Player>();
  const [message, setMessage] = useState("");

  useEffect(() => {
    getAllPlayers();
  }, []);

  const getAllPlayers = async () => {
    const data = await fetch("http://localhost:3000/api/players", {
      method: "GET",
    });

    const { players } = await data.json();
    setPlayers(players);
  };

  const selectWinner = (player: Player | undefined) => {
    setWinner(player);
    setRemainingPlayers(
      players.filter((p: Player) => p.first_name !== player!.first_name)
    );
  };

  const selectLoser = (player: Player | undefined) => {
    setLoser(player);
  };

  const recordResult = async () => {
    const gameDetails = {
      opponents: { player1: winner, player2: loser },
      winner: winner,
      eloExchange: 10,
    };

    const data = await fetch("http://localhost:3000/api/games", {
      method: "PUT",
      body: JSON.stringify(gameDetails),
    });
    const message = await data.json();
    setMessage(message);
  };

  return (
    <>
      <div>Winner</div>
      <PlayerList players={players} callback={selectWinner} />
      {remainingPlayers.length > 0 && <div>Loser</div>}
      <PlayerList players={remainingPlayers} callback={selectLoser} />
      {loser && winner && <button onClick={recordResult}>Record result</button>}
      <div>{message}</div>
      {/* <Testing /> */}
    </>
  );
}
