
const { io } = require("socket.io-client");

const socket = io("http://localhost:300");

socket.on("connect", () => {
  console.log("Connected to server:", socket.id);
  socket.emit("message", "Hello from Node client!");
  socket.emit("evaluate", "1+1");
});

socket.on("message", (data) => {
  console.log("Broadcast received:", data);
});

socket.on("disconnect", () => {
  console.log("Disconnected from server");
});
