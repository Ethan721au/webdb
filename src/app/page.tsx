"use client";

import PlayerList from "@/components/PlayerList/PlayerList";
import { recordGame } from "@/services/gameService";
import { Player } from "@/types";
import { useEffect, useState } from "react";

export default function Home() {
  const [players, setPlayers] = useState([]);
  const [remainingPlayers, setRemainingPlayers] = useState([]);
  const [winner, setWinner] = useState<Player>();
  const [loser, setLoser] = useState<Player>();
  console.log(winner, loser);

  useEffect(() => {
    getAllPlayers();
  }, []);

  const getAllPlayers = async () => {
    const data = await fetch("http://localhost:3000/api/allPlayers", {
      method: "GET",
    });

    const { players } = await data.json();
    setPlayers(players);
  };

  const selectWinner = (player: Player) => {
    setWinner(player);
    setRemainingPlayers(
      players.filter((p) => p.first_name !== player.first_name)
    );
  };

  const selectLoser = (player: Player) => {
    setLoser(player);
  };

  const recordResult = async () => {
    const gameDetails = {
      opponent: { player1: winner, player2: loser },
      winner: winner,
      eloExchange: 10,
    };

    console.log(gameDetails);
    await fetch("http://localhost:3000/api/recordGame", {
      method: "PUT",
      body: JSON.stringify(gameDetails),
    });
    // recordGame(gameDetails);
  };

  return (
    <>
      <div>Winner</div>
      <PlayerList players={players} callback={selectWinner} />
      {remainingPlayers.length > 0 && <div>Loser</div>}
      <PlayerList players={remainingPlayers} callback={selectLoser} />
      {loser && winner && <button onClick={recordResult}>Record result</button>}
    </>
  );
}
