export interface Player {
  first_name?: string;
  last_name?: string;
  elo?: number;
  winRates?: WinRates;
}

export interface WinRates {
  global: number;
}

export interface Game {
  opponents: { player1: Player; player2: Player };
  winner: Player;
  eloExchange: number;
}
