import http from "./httpService";

export const addMedicine = (payload:unknown) => {
  return http.post("/medicines", payload);
};

export const getAllMedicines = (params:unknown) => {
  return http.get("/medicines/getAllMedicines", {params });
};
