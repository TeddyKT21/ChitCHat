import { NextFunction, Request, Response } from "express";
import { getLoginUser } from "../DAL/users.js";
import * as BLAuth from "../BL/auth.js";

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;
  try {
    const user = await BLAuth.login(email, password);
    res.send(user);
  } catch (error) {
    next(error);
  }
};

export const signUp = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { user, confirmPassword } = req.body;
  try {
    const newUser = await BLAuth.signUp(user, confirmPassword);
    res.send(newUser);
  } catch (error) {
    next(error);
  }
};
