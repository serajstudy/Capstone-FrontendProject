import api from "./axiosConfig";

export async function getUsers() {
  const response = await api.get("/users");
  return response.data;
}
