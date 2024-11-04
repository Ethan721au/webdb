import { Player } from "@/types";

export const calculateWinRates = (player: Player, opponents: Player[]) => {
  const [winner, loser] = opponents;

  const updatedWinRates = opponents.map((player) => {
    if (!player.winRates) {
      console.log("no winrates");
      return {
        ...player,
        winRates: {
          globalWinRate: 0,
          globalWins: 0,
          globalLosses: 0,
          vs: [],
        },
      };
    }
    const { globalWins, globalLosses } = player.winRates;
    const updatedGlobalWins = player === winner ? globalWins + 1 : globalWins;
    const updatedGlobalLosses =
      player === loser ? globalLosses + 1 : globalLosses;
    const updatedGlobalWinRate =
      Math.round(
        (updatedGlobalWins / (updatedGlobalWins + updatedGlobalLosses)) * 100
      ) / 100;
    return {
      first_name: player.first_name,
      winRates: {
        globalWins: updatedGlobalWins,
        globalLosses: updatedGlobalLosses,
        globalWinRate: updatedGlobalWinRate,
        vs: player.winRates!.vs.map((opponent) => {
          if (opponent.player === winner.first_name) {
            const updatedWins = opponent.wins;
            const updatedLosses = opponent.losses + 1;
            const updatedWinRate =
              Math.round((updatedWins / (updatedWins + updatedLosses)) * 100) /
              100;
            return {
              player: opponent.player,
              wins: updatedWins,
              losses: updatedLosses,
              winRate: updatedWinRate,
            };
          }
          if (opponent.player === loser.first_name) {
            const updatedWins = opponent.wins + 1;
            const updatedLosses = opponent.losses;
            const updatedWinRate =
              Math.round((updatedWins / (updatedWins + updatedLosses)) * 100) /
              100;
            return {
              player: opponent.player,
              wins: updatedWins,
              losses: updatedLosses,
              winRate: updatedWinRate,
            };
          }
          return opponent;
        }),
      },
    };
  });

  const test = updatedWinRates.filter((p) => {
    return p.first_name === player.first_name;
  });
  return test[0].winRates;
};
