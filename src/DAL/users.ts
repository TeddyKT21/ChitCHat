import { User } from "../types/entities.js";
import { UserModel } from "./schemas/user.js";

export const getLoginUser = (email: string) => {
  return UserModel.findOne({ email })
    .populate({ path: "contacts", select: "-email name " })
    .populate({
      path: "chats",
      populate: {
        path: "messages",
        populate: { path: "author", select: "-email name" },
        select: "-createdAt author message",
      },
    });
};

export const getUser = (email: string) => UserModel.findOne({ email });

export const addUser = async (user: User) => {
  const newUser = new UserModel(user);
  await newUser.save();
  return newUser;
};

export const getUsers = async () => await UserModel.find();

export const updateUser = (email: string, user: User) =>
  UserModel.findOneAndUpdate({ email }, user);

export const updateUserId = (_id: string, user: User) =>
  UserModel.findByIdAndUpdate({ _id }, user);

export const deleteUser = (email: string) =>
  UserModel.findOneAndDelete({ email });
