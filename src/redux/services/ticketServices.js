import api from "./api";

export const retrive = ({ from, to, type, date }) =>
  api.get("/tickets", {
    params: {
      from,
      to,
      type,
      date,
    },
  });
export const retriveById = (id) => api.get(`/tickets/${id}`);
export const create = (formData) => api.post("/tickets", formData);
export const update = (formData, id) => api.post(`/tickets/${id}`, formData);
export const remove = (id) => api.post(`/delete/${id}`);
