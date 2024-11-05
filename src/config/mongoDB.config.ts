import { connect } from "mongoose";
// import { PlayerModel } from "./models/player.model";
// import { playersSeed } from "./seeds/playersSeed";

export const dbconnect = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is not defined in the environment variables");
    }
    connect(process.env.MONGO_URI);

    // await seedPlayers();
    // await seedRecipes();
    // await seedIngredients();
    // await seedDiaries();
    console.log("connected to db successfully---");
  } catch (error) {
    console.log(error);
  }
};

// async function seedPlayers() {
//   const playersCount = await PlayerModel.countDocuments();
//   if (playersCount > 0) {
//     console.log("Users seed is already done!");
//     return;
//   }

//   for (const player of playersSeed) {
//     await PlayerModel.create(player);
//   }

//   console.log("Users seed is done!");
// }
