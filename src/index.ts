import express from "express";
import cors from "cors";
import authRouter from "./routes/auth.js";
import usersRouter from "./routes/users.js";
import connectToMongo from "./DAL/connection.js";
import errorHandler from "./controllers/errors.js";
import morgan from "morgan";

const server = express();

server.use(morgan('tiny'))
server.use(cors());
server.use(express.json());

server.use(authRouter);
server.use(usersRouter);
server.use(errorHandler);

const PORT = 8080;
connectToMongo()
.then(() => {
  server.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
  });
})
.catch((error) => {
  console.log(error);
  
    server.listen(PORT, () => {
      console.log(`server is listening on port ${PORT} without database !`);
    });
  })
