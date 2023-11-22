import { ServerError } from "../types/errors.js";

export const credentialsError = () => new ServerError('invalid email or password!',400);
export const passwordMissmatchError = () => new ServerError('passwords do not match!',400);