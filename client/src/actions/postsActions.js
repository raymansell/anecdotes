import postService from '../services/postService';
import {
  INITIALIZE_POSTS,
  CREATE_NEW_POST,
  SET_POST_TO_EDIT,
  UPDATE_POST,
  DELETE_POST,
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

export const updatePost = (id, postData) => {
  return async (dispatch) => {
    const updatedPost = await postService.updatePost(id, postData);
    dispatch({
      type: UPDATE_POST,
      payload: { updatedPost },
    });
  };
};

export const deletePost = (id) => {
  return async (dispatch) => {
    await postService.deletePost(id);
    dispatch({
      type: DELETE_POST,
      payload: { id },
    });
  };
};
