"use server";

import { PlayerModel } from "@/config/models/player.model";
import { dbconnect } from "@/config/mongoDB.config";
import { Player } from "@/types";

export const getAllPlayers = async () => {
  dbconnect();
  try {
    const players = await PlayerModel.find();
    return players;
  } catch (err) {
    console.log(err);
    throw new Error("Error while fetching players in database!");
  }
};

export const getPlayer = async (request: Player) => {
  dbconnect();
  try {
    const player = await PlayerModel.findOne(request);
    return player;
  } catch (err) {
    console.log(err);
    throw new Error("Error while fetching player in database!");
  }
};

export const updatePlayer = async (player: Player) => {
  dbconnect();
  try {
    await PlayerModel.findOneAndReplace(
      { first_name: player.first_name },
      { first_name: "John" }
    );

    const user = await getPlayer({ first_name: "John" });

    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Error while fetching user in database!");
  }
};
