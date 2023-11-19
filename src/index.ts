import express from "express";
import cors from "cors";
import authRouter from "./routes/auth.js";
import usersRouter from "./routes/users.js";
import connectToMongo from "./DAL/connection.js";

const server = express();

server.use(cors());
server.use(express.json());

server.use(authRouter);
server.use(usersRouter);

const PORT = 8080;
connectToMongo()
.then(() => {
  server.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
  });
})
.catch(() => {
    server.listen(PORT, () => {
      console.log(`server is listening on port ${PORT} without database !`);
    });
  })
