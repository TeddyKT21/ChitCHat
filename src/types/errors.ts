export class ServerError extends Error  {
    statusCode:number;
    constructor(message:string, statuseCode:number){
        super(message);
        this.statusCode = statuseCode;
    }
}