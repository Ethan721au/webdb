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
    const isExisting = await getPlayer({ first_name: player.first_name });
    if (!isExisting) {
      return "Player does not exist!";
    } else {
      await PlayerModel.findOneAndReplace(
        { first_name: player.first_name },
        player
      );

      return "Player updated successfully!";
    }
  } catch (err) {
    console.log(err);
    throw new Error("Error while fetching user in database!");
  }
};

export const addPlayer = async (newPlayer: Player) => {
  dbconnect();
  try {
    const isExisting = await getPlayer({ first_name: newPlayer.first_name });

    if (isExisting) {
      return "Player already exists!";
    } else {
      await PlayerModel.create(newPlayer);
      return "Player added successfully!";
    }
  } catch (err) {
    console.log(err);
    throw new Error("Error while fetching player in database!");
  }
};

export const deletePlayer = async (player: Player) => {
  dbconnect();
  try {
    const isExisting = await getPlayer({ _id: player._id });
    console.log(isExisting);

    if (!isExisting) {
      return "Player does not exist!";
    } else {
      await PlayerModel.deleteOne(player);
      return "Player deleted successfully!";
    }
  } catch (err) {
    console.log(err);
    throw new Error("Error while fetching player in database!");
  }
};
