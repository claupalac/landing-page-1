import axios from 'axios';

// Create an axios instance with the base URL of your backend
const api = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
  },
});

// API functions
export const getFeatures = async () => {
  try {
    const response = await api.get('/api/features');
    return response.data;
  } catch (error) {
    console.error('Error fetching features:', error);
    throw error;
  }
};

export const submitContactForm = async (formData) => {
  try {
    const response = await api.post('/api/contact', formData);
    return response.data;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
};

export default api; 