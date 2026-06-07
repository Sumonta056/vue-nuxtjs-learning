import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/Code-Pop/Real-World_Vue-3",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getEvent() {
    return apiClient.get("/events");
  },

  getEventById(id) {
    return apiClient.get(`/events/${id}`);
  },

  // POST - Create new event
  createEvent(event) {
    return apiClient.post("/events", event);
  },

  // PUT - Update entire event
  updateEvent(id, event) {
    return apiClient.put(`/events/${id}`, event);
  },

  // PATCH - Partial update of event
  patchEvent(id, eventData) {
    return apiClient.patch(`/events/${id}`, eventData);
  },

  // DELETE - Remove event
  deleteEvent(id) {
    return apiClient.delete(`/events/${id}`);
  },
};
