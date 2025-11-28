import mongoose from "mongoose";

const PlayerSchema = new mongoose.Schema({
  wallet: { type: String, unique: true },
  score: { type: Number, default: 0 },
  level: { type: Number, default: 1 },
  skins: { type: [String], default: ["pengu"] },
  lastDailyClaim: { type: String, default: "" }
});

export default mongoose.model("Player", PlayerSchema);