export interface User{
    email:string;
    name:string;
    password:string;
    contacts:User[];
    chats:Chat[]

}

export interface Chat{ 
    title:string; 
    participants:User[];
    admins:User[];
    createdAt:Date;
    messages:Message;
}
export type Content = string

export interface Message{
    author:User;
    chat:Chat;
    createdAt:Date;
    content:Content;
}
