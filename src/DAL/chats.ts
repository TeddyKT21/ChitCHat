import { Chat } from "../types/entities.js";
import { ChatModel } from "./schemas/chat.js";
import { UserModel } from "./schemas/user.js";

export const addChat = async (chat: Chat) => {
  const newChat = new ChatModel(chat);
  await newChat.save();
  await UserModel.updateMany(
    {
      _id: { $in: newChat.participants },
    },
    { $push: { chats: newChat } }
  );
  return newChat;
};
