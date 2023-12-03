import { Message } from "../types/entities.js";
import { addMessage as addMessageDal } from "../DAL/messages.js";

export const addMessage = async(message:Message,chat_id:string) =>{
    await addMessageDal(message,chat_id);
    
}