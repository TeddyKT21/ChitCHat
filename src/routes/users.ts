import { Router } from "express";
import { getUser, getUsers } from "../controllers/users.js";

const usersRouter = Router()

usersRouter.get('/users/:email',getUser);
usersRouter.get('/users',getUsers);

export default usersRouter;