import { model, Schema } from "mongoose";
import mongoose from "mongoose";

export const gameSchema = new Schema(
  {
    // outcome: { type: String, required: true },
    opponents: { type: Object, required: true },
    winner: { type: Object, required: true },
    eloExchange: { type: Number, required: true },
  },
  { timestamps: true }
);

export const GameModel = mongoose.models.game || model("game", gameSchema);
