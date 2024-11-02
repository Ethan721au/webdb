import { model, Schema } from "mongoose";
import mongoose from "mongoose";

export const gameSchema = new Schema(
  {
    season: { type: Number, required: true },
    opponents: { type: Array, required: true },
    isDraw: { type: Boolean, required: true, default: false },
    winner: { type: Object },
    loser: { type: Object },
    eloExchange: { type: Number },
  },
  { timestamps: true }
);

export const GameModel = mongoose.models.game || model("game", gameSchema);
