"use server";

import { PlayerModel } from "@/config/models/player.model";
import { dbconnect } from "@/config/mongoDB.config";

export const getAllPlayers = async () => {
  dbconnect();
  try {
    const players = await PlayerModel.find();
    return players;
  } catch (err) {
    console.log(err);
    throw new Error("Error while fetching player in database!");
  }
};

export const getPlayer = async (request) => {
  dbconnect();
  try {
    const player = await PlayerModel.findOne(request);
    return player;
  } catch (err) {
    console.log(err);
    throw new Error("Error while fetching player in database!");
  }
};

export const updatePlayer = async (player) => {
  console.log(player, "player");

  dbconnect();
  try {
    await PlayerModel.findOneAndReplace(
      { first_name: player.first_name },
      { first_name: "John" }
    );

    const user = await getPlayer({ first_name: "John" });

    console.log(user, "user");
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Error while fetching user in database!");
  }
};
