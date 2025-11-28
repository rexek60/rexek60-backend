import express from "express";
import mongoose from "mongoose";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import { MONGO_URL, PORT } from "./config.js";

import profileRoutes from "./routes/profile.js";
import leaderboardRoutes from "./routes/leaderboard.js";
import saveRoutes from "./routes/save.js";
import shopRoutes from "./routes/shop.js";

import initSocket from "./websocket.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/profile", profileRoutes);
app.use("/leaderboard", leaderboardRoutes);
app.use("/save", saveRoutes);
app.use("/shop", shopRoutes);

const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });
initSocket(io);

mongoose.connect(MONGO_URL).then(() => {
  console.log("MongoDB connected.");
  server.listen(PORT, () => console.log("Server running on", PORT));
});