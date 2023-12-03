import { NextFunction, Request, Response } from "express";
import {login as loginBL, signUp as signUpBL} from "../BL/auth.js";

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;
  try {
    const user = await loginBL(email, password);
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
    const newUser = await signUpBL(user, confirmPassword);
    res.send(newUser);
  } catch (error) {
    next(error);
  }
};
