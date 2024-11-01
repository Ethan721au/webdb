import { model, Schema } from "mongoose";
import mongoose from "mongoose";

export const playerSchema = new Schema(
  {
    first_name: { type: String },
    last_name: { type: String },
    elo: { type: Number, default: 1200 },
    winRates: { type: Object, default: { global: 0 } },
    leaderboard: { type: Array },
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
