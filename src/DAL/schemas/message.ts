import { Document, Schema, model } from "mongoose";
import { Message } from "../../types/entities.js";

interface MessageDocumet extends Document, Message {}


const MessageSchema = new Schema({
    author:{
        type: Schema.Types.ObjectId,
        ref:'User',
        require:true
    },
    chat:{
        type: Schema.Types.ObjectId,
        ref:'Chat',
        require:true
    },
    createdAt:{
        type:Date,
        require:true
    },
    content:{
        type:String,
        require:true
    }
})

export const MessageModel = model<MessageDocumet>('Message',MessageSchema);
