import { model, Schema } from "mongoose";
import mongoose from "mongoose";

export const playerSchema = new Schema(
  {
    first_name: { type: String },
    last_name: { type: String },
    elo: { type: Number, default: 1200 },
    winRates: {
      type: Object,
      default: { globalWins: 0, globalLosses: 0, globalWinRate: 0, vs: [] },
    },
    leaderboard: {
      type: Array,
      default: [
        {
          season: 8,
          matchesPlayed: 0,
          wins: 0,
          draws: 0,
          losses: 0,
          overall_points: 0,
          trophyTally: 0,
        },
      ],
    },
    // trophyTally: { type: Number, default: 0 },
    // first_name: { type: String },
    // last_name: { type: String },
    // provider: { type: String },
    // email: { type: String, required: true },
    // password: { type: String },
    // targetCalories: { type: Number, default: 2000 },
    // favourites: { type: Array },
    // isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const PlayerModel =
  mongoose.models.player || model("player", playerSchema);
