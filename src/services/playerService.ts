"use server";

import { PlayerModel } from "@/config/models/player.model";
import { dbconnect } from "@/config/mongoDB.config";

export const getPlayer = async () => {
  dbconnect();
  try {
    const user = await PlayerModel.findOne({ name: "Stephane" });
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Error while fetching user in database!");
  }
};
