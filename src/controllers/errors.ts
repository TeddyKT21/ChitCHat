import { NextFunction, Request, Response } from "express";
import { ServerError } from "../types/errors.js";

const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(error);
  console.log('in errorHandler');
  
  let message = "an error occured";
  let statusCode = 500;
  if (error instanceof Error) message = error.message;
  if (error instanceof ServerError) statusCode = error.statusCode;
  res.status(statusCode).send(message);
};

export default errorHandler;
