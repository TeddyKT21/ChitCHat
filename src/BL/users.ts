import { getUser as getUserDal, addUser as addUserDal } from "../DAL/users.js";
import { userNotFoundError } from "../errors/users.js";

export const getUser = async (email: string) => {
  const user = await getUserDal(email);
  if (!user) throw userNotFoundError();
};