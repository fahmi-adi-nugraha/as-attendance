import { api } from "@/lib/axios";

export const UserService = {
  async getAll() {
    const res = await api.get("/users");
    return res.data;
  },

  async create(data: any) {
    const res = await api.post("/users", data);
    return res.data;
  },
};