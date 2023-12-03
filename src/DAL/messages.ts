import { Chat, Message } from "../types/entities.js"
import { ChatModel } from "./schemas/chat.js";
import { MessageModel } from "./schemas/message.js"

export const addMessage = async (message:Message,chat_id:string) =>{
    const newMessage = new MessageModel(message);
    await newMessage.save();
    await ChatModel.findByIdAndUpdate(chat_id);
    return newMessage;

}