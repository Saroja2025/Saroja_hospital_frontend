import http from "./httpService";

export const addBilling = (payload:unknown) => {
  return http.post("/billings", payload);
};

export const getAllBillings = (params:unknown) => {
  return http.get("/billings/getAllBillings", {params });
};


export const getBillingById = (billingId:string,params:unknown) => {
  return http.get("/billings/"+billingId, {params });
};
