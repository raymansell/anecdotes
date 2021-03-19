import postService from '../services/postService';
import {
  INITIALIZE_POSTS,
  CREATE_NEW_POST,
  SET_POST_TO_EDIT,
  UPDATE_POST,
} from '../constants/postsConstants';

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

export const createPost = (postData) => {
  return async (dispatch) => {
    const newPost = await postService.createPost(postData);
    dispatch({
      type: CREATE_NEW_POST,
      payload: { newPost },
    });
  };
};

export const setPostToEdit = (id) => {
  return {
    type: SET_POST_TO_EDIT,
    payload: { id },
  };
};

export const updatePost = (postId, postData) => {
  return async (dispatch) => {
    const updatedPost = await postService.updatePost(postId, postData);
    dispatch({
      type: UPDATE_POST,
      payload: { updatedPost },
    });
  };
};
