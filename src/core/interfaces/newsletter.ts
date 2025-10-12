import { IMongoose } from ".";

export interface INewsLetter extends IMongoose {
  firstName?: string;
  lastName?: string;
  email: string;
  isSubscribe?: boolean;
}
