import postService from '../services/postService';
import { INITIALIZE_POSTS } from '../constants/postsConstants';

// Action creators

export const initializePosts = () => {
  return async (dispatch) => {
    const posts = await postService.getAllPosts();
    dispatch({
      type: INITIALIZE_POSTS,
      payload: { posts },
    });
  };
};
