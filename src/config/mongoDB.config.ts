import { connect } from "mongoose";

export const dbconnect = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is not defined in the environment variables");
    }
    connect(process.env.MONGO_URI);

    // await seedUsers();
    // await seedRecipes();
    // await seedIngredients();
    // await seedDiaries();
    console.log("connected to db successfully---");
  } catch (error) {
    console.log(error);
  }
};
