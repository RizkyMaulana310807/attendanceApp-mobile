import axios from "axios";

const API_URL = "http://10.249.221.72:3000/api";

// GANTI pakai IP laptop kamu

export const loginUser = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL}/users/login`, {
    email,
    password,
  });

  return response.data;
};
