import express from "express";
import Player from "../models/Player.js";

const router = express.Router();

router.post("/init", async (req, res) => {
  const { wallet } = req.body;
  let user = await Player.findOne({ wallet });
  if (!user) user = await Player.create({ wallet });
  res.json(user);
});

router.post("/save", async (req, res) => {
  const { wallet, score, level } = req.body;
  await Player.updateOne({ wallet }, { score, level });
  res.json({ status: "saved" });
});

router.get("/load/:wallet", async (req, res) => {
  const user = await Player.findOne({ wallet: req.params.wallet });
  res.json(user);
});

export default router;