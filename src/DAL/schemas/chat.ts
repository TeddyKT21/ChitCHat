import { Document, Schema, model } from "mongoose";
import { Chat } from "../../types/entities.js";

interface ChatDoucmet extends Document, Chat {}

const ChatSchema = new Schema({
    title:{
        type:String,
        require:true
    },
    participants:[{
        type:Schema.Types.ObjectId,
        ref:'User',
    }],
    admins:[{
        type:Schema.Types.ObjectId,
        ref:'User',
    }],
    createdAt:{
        type:Date,
        require:true
    },
    messages:[{
        type:Schema.Types.ObjectId,
        ref:'Message',
    }],
})

export const ChatModel = model<ChatDoucmet>('Chat',ChatSchema);