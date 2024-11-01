export interface Player {
  first_name?: string;
  last_name?: string;
  elo?: number;
  winRates?: WinRates;
  leaderboard?: Leaderboard[];
}

export interface WinRates {
  global: number;
}

export interface Game {
  createdAt: string;
  opponents: { player1: Player; player2: Player };
  winner: Player;
  eloExchange: number;
}

export interface Leaderboard {
  season: number;
  matchesPlayed: number;
  wins: number;
  draws: number;
  losses: number;
  overall_points: number;
  trophyTally: number;
}
