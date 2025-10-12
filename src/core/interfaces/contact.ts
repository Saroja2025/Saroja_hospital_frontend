import { IMongoose } from ".";

export interface IContact extends IMongoose {
  name: string;
  email: string;
  subject: string;
  message?: string;
  date?: Date;
  isDeleted?: boolean;
}
