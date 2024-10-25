"use server";

import { PlayerModel } from "@/config/models/player.model";
import { dbconnect } from "@/config/mongoDB.config";

export const getPlayer = async () => {
  dbconnect();
  try {
    const player = await PlayerModel.findOne({ name: "Stephane" });
    return player;
  } catch (err) {
    console.log(err);
    throw new Error("Error while fetching player in database!");
  }
};

export const updatePlayer = async (player) => {
  dbconnect();
  try {
    const user = await PlayerModel.findOneAndReplace(
      { name: player.name },
      player
    );
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Error while fetching user in database!");
  }
};
