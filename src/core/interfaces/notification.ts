import { IMongoose } from ".";
import { Types } from 'mongoose';

export interface INotification extends IMongoose{
  recipient: Types.ObjectId;
  sender?: Types.ObjectId;
  type?: string; // e.g., 'event'
  title: string;
  link?: string;
  date?: Date;
  description?: string;
  seened?: boolean;
  isDeleted?: boolean;
}
