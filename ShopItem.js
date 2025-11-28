import mongoose from "mongoose";

const ShopSchema = new mongoose.Schema({
  id: Number,
  name: String,
  cost: Number
});

export default mongoose.model("ShopItem", ShopSchema);