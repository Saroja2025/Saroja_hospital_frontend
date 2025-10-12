import type { IMongoose } from ".";


export interface IMedicine extends IMongoose{
  name: string;
  genericName?: string;
  brand?: string;
  manufacturer?: string;
  description?: string;
  dosageForm: string;
  strength?: string;
  unit?: string;
  price: number;
  quantityInStock?: number;
  expiryDate: Date;
  batchNumber: string;
  prescriptionRequired?: boolean;
  category?: string;
  barcode?: string;
  storageLocation?: string;
  status?: 'available' | 'out_of_stock' | 'expired';
  isDeleted?: boolean;
}
