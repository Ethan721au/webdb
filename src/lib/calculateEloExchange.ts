export const k = 32;

export const eloForumla = (elo: number, opponentElo: number) => {
  const formula =
    Math.pow(10, elo / 400) /
    (Math.pow(10, elo / 400) + Math.pow(10, opponentElo / 400));
  return formula;
};

export const determineEloExchange = (elo: number, opponentElo: number) => {
  return Math.round(k * (1 - eloForumla(elo, opponentElo)));
};
