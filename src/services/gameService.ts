"use server";

import { GameModel } from "@/config/models/game.model";
import { dbconnect } from "@/config/mongoDB.config";
import { Game } from "@/types";

export const getAllGames = async () => {
  dbconnect();
  try {
    const games = await GameModel.find();
    return games;
  } catch (err) {
    console.log(err);
    throw new Error("Error while fetching games from database!");
  }
};

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
