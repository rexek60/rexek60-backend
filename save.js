import express from "express";
import Player from "../models/Player.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { wallet, data } = req.body;
  await Player.updateOne({ wallet }, data);
  res.json({ status: "saved" });
});

export default router;