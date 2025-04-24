import axios from 'axios';

// Create an axios instance with the base URL of your backend
const api = axios.create({
  baseURL: process.env.NODE_ENV === 'production' 
    ? 'https://webmakersbo.site' 
    : 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
  },
  // Add timeout
  timeout: 10000,
});

// Add request interceptor
api.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

// Add response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

// API functions
export const getFeatures = async () => {
  try {
    const response = await api.get('/api/features');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const submitContactForm = async (formData) => {
  try {
    const response = await api.post('/api/contact', formData);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message || 'Failed to send message');
    } else if (error.request) {
      throw new Error('No response from server. Please check your connection.');
    } else {
      throw new Error('Error setting up request: ' + error.message);
    }
  }
};

export default api; 