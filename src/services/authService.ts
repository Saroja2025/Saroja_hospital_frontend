import http from "./httpService";

export const login = (data: { email: string; password: string }) => {
  return http.post("/auth/admin/login", data);
};
