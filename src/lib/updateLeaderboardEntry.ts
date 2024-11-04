import { Leaderboard, Player } from "@/types";

export const updateLeaderboardEntry = (
  entry: Leaderboard,
  player: Player,
  season: number,
  draw: boolean,
  winner: Player,
  loser: Player
) => {
  if (entry.season !== season) return entry;
  return {
    ...entry,
    matchesPlayed: entry.matchesPlayed + 1,
    wins: draw ? entry.wins : player === winner ? entry.wins + 1 : entry.wins,
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
};
