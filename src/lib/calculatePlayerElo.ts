import { Player } from "@/types";

export const calculateElo = (
  player: Player,
  eloExchange: number,
  draw: boolean,
  winner: Player
) =>
  draw
    ? player.elo
    : player === winner
      ? player.elo! + eloExchange!
      : player.elo! - eloExchange!;
