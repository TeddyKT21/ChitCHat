import { addUser, getLoginUser } from "../DAL/users.js";
import {
  credentialsError,
  passwordMissmatchError,
} from "../errors/auth.js";
import { User } from "../types/entities.js";

const comaprePassowrd = (userPassowrd: string, sentPassword: string) =>
  userPassowrd === sentPassword;

export const login = async (email: string, password: string) => {
  const user = await getLoginUser(email);
  if (!user) return credentialsError();
  if (comaprePassowrd(user.password, password)) return user;
  return credentialsError();
};

export const signUp = async (user: User, confirmPassword: string) => {
  if (user.password !== confirmPassword) return passwordMissmatchError();
  return await addUser(user);
};
