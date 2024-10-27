export interface Player {
  first_name: string;
  last_name: string;
  elo: number;
  winRates: WinRates;
}

export interface WinRates {
  global: number;
}
