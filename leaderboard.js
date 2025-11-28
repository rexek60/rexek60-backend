import express from "express";
import Score from "../models/Score.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const top = await Score.find().sort({ score: -1 }).limit(100);
  res.json(top);
});

router.post("/submit", async (req, res) => {
  const { wallet, score } = req.body;
  await Score.create({ wallet, score });
  res.json({ status: "submitted" });
});

export default router;