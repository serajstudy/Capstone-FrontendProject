import api from "./axiosConfig";

export async function getCountries() {
  const response = await api.get("/countries");
  return response.data;
}
