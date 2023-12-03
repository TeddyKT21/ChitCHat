import { Server, Socket } from "socket.io";
import { createServer } from "http";
import { Express } from "express";
import { addMessage } from "./messageEvents.js";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

const userSockets = new Map<
  String,
  Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>
>();

export const addSocketIo = (server: Express) => {
  const httpServer = createServer(server);
  const io = new Server(httpServer);
  io.on("connection", (socket) => {
    io.on("subscribe", (user_id) => userSockets.set(user_id, socket));
  });
  addEvents(io);
};

function addEvents(io: Server) {
  io.on("newMessage", addMessage);
}
