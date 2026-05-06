import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const login = async (credentials) => {
  const response = await axios.post(`${API_BASE_URL}/auth/login`, credentials);
  return response.data;
};

export const register = async (userData) => {
  const response = await axios.post(`${API_BASE_URL}/auth/register`, userData);
  return response.data;
};

export const getRooms = async () => {
  const response = await axios.get(`${API_BASE_URL}/rooms`);
  return response.data;
};

export const getRoomById = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/rooms/${id}`);
  return response.data;
};

export const createBooking = async (bookingData, token) => {
  const response = await axios.post(`${API_BASE_URL}/bookings`, bookingData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const getUserBookings = async (token) => {
  const response = await axios.get(`${API_BASE_URL}/bookings`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const cancelBooking = async (bookingId, token) => {
  const response = await axios.delete(`${API_BASE_URL}/bookings/${bookingId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const getUserProfile = async (token) => {
  const response = await axios.get(`${API_BASE_URL}/users/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
