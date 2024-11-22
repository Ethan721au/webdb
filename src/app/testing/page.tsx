"use client";

import { useState } from "react";

const defaultStartingPlayer = [
  {
    player: "player1",
    startingPlayer: false,
  },
  {
    player: "player2",
    startingPlayer: false,
  },
  {
    player: "player3",
    startingPlayer: false,
  },
  {
    player: "player4",
    startingPlayer: false,
  },
];

export default function Test() {
  const [startingPlayer, setStartingPlayer] = useState(defaultStartingPlayer);

  const highlight = () => {
    for (let i = 0; i < 7; i++) {
      setTimeout(() => {
        setStartingPlayer((prevState) => {
          return prevState.map((player, idx) => {
            if (idx === i % startingPlayer.length) {
              return { ...player, startingPlayer: true };
            } else {
              return { ...player, startingPlayer: false };
            }
          });
        });
      }, i * 1000);
    }
  };

  return (
    <>
      {startingPlayer.map((player, idx) => (
        <div
          key={idx}
          style={{
            color: "white",
            backgroundColor: player.startingPlayer ? "red" : "green",
          }}
        >
          {player.player}
        </div>
      ))}
      <button style={{ color: "white" }} onClick={highlight}>
        tete
      </button>
    </>
  );
}
