import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://goku:gOokGLY4wzRfNTFG@devcon.pmwsv.mongodb.net/food-del"
    )
    .then(() => {
      console.log("db connected");
    });
};
