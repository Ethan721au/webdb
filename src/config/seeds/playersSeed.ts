export const playersSeed = [
  {
    first_name: "Richard",
    elo: 1200,
    winRates: {
      globalWinRate: 1,
      globalWins: 1,
      globalLosses: 1,
      vs: [
        { player: "Eric", wins: 1, losses: 1, winRate: 0.5 },
        { player: "John", wins: 0, losses: 1, winRate: 0 },
        { player: "Stephane", wins: 0, losses: 1, winRate: 0 },
        { player: "Jane", wins: 1, losses: 0, winRate: 1 },
      ],
    },
    leaderboard: [
      {
        season: 8,
        matchesPlayed: 18,
        wins: 14,
        draws: 0,
        losses: 4,
        overall_points: 42,
        trophyTally: 3,
      },
    ],
  },
  { first_name: "John" },
  { first_name: "Stephane" },
  { first_name: "Jane" },
  {
    first_name: "Eric",
    elo: 1300,
    winRates: {
      globalWinRate: 0.5,
      globalWins: 0,
      globalLosses: 0,
      vs: [
        { player: "Richard", wins: 0, losses: 1, winRate: 0 },
        { player: "John", wins: 0, losses: 1, winRate: 0 },
        { player: "Stephane", wins: 0, losses: 1, winRate: 0 },
        { player: "Jane", wins: 1, losses: 0, winRate: 1 },
      ],
    },
    leaderboard: [
      {
        season: 8,
        matchesPlayed: 18,
        wins: 14,
        draws: 0,
        losses: 4,
        overall_points: 42,
        trophyTally: 3,
      },
    ],
  },
];
