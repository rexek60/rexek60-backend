import express from "express";
import Player from "../models/Player.js";

const router = express.Router();

router.post("/buy", async (req, res) => {
  const { wallet, skin, cost } = req.body;
  const user = await Player.findOne({ wallet });

  if (!user) return res.json({ error: "player_not_found" });
  if (user.score < cost) return res.json({ error: "insufficient_score" });

  user.score -= cost;
  user.skins.push(skin);
  await user.save();

  res.json({ status: "ok", skins: user.skins });
});

export default router;