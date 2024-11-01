import { Player } from "@/types";

export const calculateWinRates = (
  player: Player,
  winner: Player,
  loser: Player
) => {
  console.log(winner, loser);
  const opponents = [winner, loser];
  console.log(opponents);

  const updatedWinRates = opponents.map((player) => {
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
        vs: player.winRates.vs.map((opponent) => {
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

  // const updatedWinRates = opponents.map((player) => {
  //   const { globalWins, globalLosses } = player.winRates;
  //   const updatedGlobalWins = player === winner ? globalWins + 1 : globalWins;
  //   const updatedGlobalLosses =
  //     player === loser ? globalLosses + 1 : globalLosses;
  //   const updatedGlobalWinRate =
  //     Math.round(
  //       (updatedGlobalWins / (updatedGlobalWins + updatedGlobalLosses)) * 100
  //     ) / 100;
  //   return {
  //     globalWins: updatedGlobalWins,
  //     globalLosses: updatedGlobalLosses,
  //     globalWinRate: updatedGlobalWinRate,
  //     vs: player.winRates.vs.map((opponent) => {
  //       if (opponent.player === winner.first_name) {
  //         const updatedWins = opponent.wins;
  //         const updatedLosses = opponent.losses + 1;
  //         const updatedWinRate =
  //           Math.round((updatedWins / (updatedWins + updatedLosses)) * 100) /
  //           100;
  //         return {
  //           player: opponent.player,
  //           wins: updatedWins,
  //           losses: updatedLosses,
  //           winRate: updatedWinRate,
  //         };
  //       }
  //       if (opponent.player === loser.first_name) {
  //         const updatedWins = opponent.wins + 1;
  //         const updatedLosses = opponent.losses;
  //         const updatedWinRate =
  //           Math.round((updatedWins / (updatedWins + updatedLosses)) * 100) /
  //           100;
  //         return {
  //           player: opponent.player,
  //           wins: updatedWins,
  //           losses: updatedLosses,
  //           winRate: updatedWinRate,
  //         };
  //       }
  //       return opponent;
  //     }),
  //   };
  // });

  console.log(updatedWinRates, "updatedWinRates");
  const test = updatedWinRates.filter((p) => {
    return p.first_name === player.first_name;
  });
  return test[0].winRates;
};
