import type { IMongoose } from ".";
import type { IMedicine } from "./medicine";


export interface IPatient extends IMongoose {
  name: string;
  phone?: string;
  age?: number;
  gender?: string;
  address?: string
}

export interface IBillingForm extends IMongoose {
  patient:IPatient,
  medicines:{
    medicine: string,
    quantity: number;
    price: number;
    total: number;
  }[],
  totalAmount: number;
  netAmount: number;
  paymentStatus: string;
  discount: number
}

export interface IBilling extends IMongoose {
  patient:IPatient,
  medicines:{
    medicine: IMedicine,
    quantity: number;
    price: number;
    total: number;
  }[],
  totalAmount: number;
  netAmount: number;
  paymentStatus: string;
  discount: number;
  billingDate: Date
}