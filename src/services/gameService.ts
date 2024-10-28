"use server";

import { GameModel } from "@/config/models/game.model";
import { dbconnect } from "@/config/mongoDB.config";
import { Game } from "@/types";

export const recordGame = async (game: Game) => {
  dbconnect();
  try {
    await GameModel.create(game);
    return "Game recorded successfully!";
  } catch (err) {
    console.log(err);
    throw new Error("Error while recoding game in database!");
  }
};
