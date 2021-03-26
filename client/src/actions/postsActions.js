import postService from '../services/postService';
import {
  INITIALIZE_POSTS,
  CREATE_NEW_POST,
  SET_POST_TO_EDIT,
  UPDATE_POST,
  DELETE_POST,
  LIKE_POST,
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
  return async (dispatch, getState) => {
    const {
      userInfo: { token },
    } = getState();
    const newPost = await postService.createPost(postData, token);
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
  return async (dispatch, getState) => {
    const {
      userInfo: { token },
    } = getState();
    const updatedPost = await postService.updatePost(id, postData, token);
    dispatch({
      type: UPDATE_POST,
      payload: { updatedPost },
    });
  };
};

export const deletePost = (id) => {
  return async (dispatch, getState) => {
    const {
      userInfo: { token },
    } = getState();
    await postService.deletePost(id, token);
    dispatch({
      type: DELETE_POST,
      payload: { id },
    });
  };
};

export const likePost = (id) => {
  return async (dispatch, getState) => {
    const {
      userInfo: { token },
    } = getState();
    const updatedPost = await postService.likePost(id, token);
    dispatch({
      type: LIKE_POST,
      payload: { updatedPost },
    });
  };
};
