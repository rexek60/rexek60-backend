export default function initSocket(io) {
  io.on("connection", (socket) => {
    socket.on("joinRoom", ({ wallet, room }) => {
      socket.join(room);
      socket.room = room;
    });
    socket.on("playerMove", (data) => {
      socket.to(socket.room).emit("playerMove", data);
    });
  });
}