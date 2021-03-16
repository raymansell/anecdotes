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

const createPost = async () => {};

const likePost = async () => {};

const updatePost = async () => {};

const deletePost = async () => {};

const postService = {
  getAllPosts,
  createPost,
  likePost,
  updatePost,
  deletePost,
};

export default postService;
