import axios from 'axios';

let API_BASE_URL;

if (process.env.NODE_ENV === 'development') {
  API_BASE_URL = 'http://localhost:5000/api';
}

if (process.env.NODE_ENV === 'production') {
  API_BASE_URL = 'https://anecdotes-project.herokuapp.com/api';
}

const signin = async (credentials) => {
  const response = await axios.post(`${API_BASE_URL}/login`, credentials);
  return response.data;
};

const signup = async (formData) => {
  const response = await axios.post(`${API_BASE_URL}/users`, formData);
  return response.data;
};

const authService = {
  signin,
  signup,
};

export default authService;
