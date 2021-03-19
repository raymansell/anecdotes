import axios from 'axios';

let API_BASE_URL;

if (process.env.NODE_ENV === 'development') {
  API_BASE_URL = 'http://localhost:5000/api/posts';
}

if (process.env.NODE_ENV === 'production') {
  API_BASE_URL = 'deployed backend url';
}

const getAllPosts = async () => {
  const response = await axios.get(API_BASE_URL);
  return response.data;
};

const createPost = async (postData) => {
  const response = await axios.post(API_BASE_URL, postData);
  return response.data;
};

const likePost = async (postId) => {
  const response = await axios.patch(`${API_BASE_URL}/${postId}/likePost`);
  return response.data;
};

const updatePost = async (postId, postData) => {
  const response = await axios.patch(`${API_BASE_URL}/${postId}`, postData);
  return response.data;
};

const deletePost = async (postId) => {
  const response = await axios.delete(`${API_BASE_URL}/${postId}`);
  return response.data;
};

const postService = {
  getAllPosts,
  createPost,
  likePost,
  updatePost,
  deletePost,
};

export default postService;
