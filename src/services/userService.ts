import http from "./httpService";

export const addUser = (payload:unknown) => {
  return http.post("/users", payload);
};

export const getAllUsers = (params:unknown) => {
  return http.get("/users/getAllUsers", {params });
};
