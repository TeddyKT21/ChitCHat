import { NextFunction, Request, Response } from "express";
import { getUsers as getUsersDal } from "../DAL/users.js";
import { getUser as getUserBL } from "../BL/users.js";

export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body;
  try {
    const user = await getUserBL(email);
    res.send(user);
  } catch (error) {
    next(error);
  }
};

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await getUsersDal();
    res.send(users);
  } catch (error) {
    next(error);
  }
};
