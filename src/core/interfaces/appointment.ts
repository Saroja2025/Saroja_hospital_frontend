import { Types } from 'mongoose';
import { IMongoose } from '.';

export interface IAppointment extends IMongoose {
  fullName: string;
  email: string;
  phone: string;
  date: Date;
  department: string;
  doctor: Types.ObjectId;
  description?: string;
  isSubscribe?: boolean;
}
