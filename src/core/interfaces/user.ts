import type { IMongoose } from ".";


export interface IUser extends IMongoose {
  firstName: string;
  lastName?: string;
  role?: string; // ideally: 'doctor' | 'admin' | ...
  email: string;
  password?: string;
  avatar?: string;
  phone?: string;
  dob?: Date;
  gender?: string; // ideally: 'male' | 'female' | 'other' | ...
  
  parentFirstName?: string;
  parentLastName?: string;
  parentEmail?: string;
  parentPhone?: string;
  parentRelation?: string;

  schoolName?: string;
  schoolAddress?: string;

  privacyPolicy?: boolean;
  termAndCondition?: boolean;

  bio?: string;
  address?: string;

  joinedAt?: Date;
  isSuperUser?: boolean;

  otp?: string;
  otpExpiredAt?: Date;

  isBlocked?: boolean;
  isVerified?: boolean;
  isDeleted?: boolean;
}
