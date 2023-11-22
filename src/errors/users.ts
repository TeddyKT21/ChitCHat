import { ServerError } from "../types/errors.js";

export const userNotFoundError = () => new ServerError('user not found!',404);