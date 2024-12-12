import { createServer } from "node:http";
import next from "next";
import { Server } from "socket.io";

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = 3000;

const app = next({ dev, hostname, port });
const handler = app.getRequestHandler();
const room=["/tech","/casual"]

app.prepare().then(() => {
  const httpServer = createServer(handler);

  const io = new Server(httpServer);

  io.on("connection", (socket) => {
    console.log("A client connected");

    socket.on("chatMessage", (msg) => {
      console.log("Received message:", msg);
      // Broadcast to all clients
      socket.broadcast.emit("chatMessage", msg);
    });

    socket.on("disconnect", () => {
      console.log("A client disconnected");
    });
  });

  httpServer
    .once("error", (err) => {
      console.error("Error occurred:", err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
});
