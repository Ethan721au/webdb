import { GameModel } from "@/config/models/game.model";
import { dbconnect } from "@/config/mongoDB.config";

export const recordGame = async (game) => {
  console.log(game, "game");
  // dbconnect();
  // try {
  //   const players = await GameModel.create();
  //   return players;
  // } catch (err) {
  //   console.log(err);
  //   throw new Error("Error while fetching player in database!");
  // }
};
