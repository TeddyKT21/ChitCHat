import mongoose, { Document, Model, Schema, model } from "mongoose";
import { User } from "../../types/entities.js";


interface UserDocument extends Document,User {}

const UserSchema = new Schema({
    email:{
        type:String,
        require:true,
        unique:true
    },
    name:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
    },
    contacts:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
    }],
    chats:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Chat',
    }]
})

export const UserModel = model<UserDocument>('User',UserSchema);