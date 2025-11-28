import mongoose from "mongoose";

const ScoreSchema = new mongoose.Schema({
  wallet: String,
  score: Number,
  date: { type: Date, default: Date.now }
});

export default mongoose.model("Score", ScoreSchema);