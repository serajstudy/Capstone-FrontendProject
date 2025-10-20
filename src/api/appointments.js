import api from "./axiosConfig";

export async function getAppointments() {
  const response = await api.get("/appointment");
  return response.data;
}
