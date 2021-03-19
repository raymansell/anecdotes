import {
  INITIALIZE_POSTS,
  CREATE_NEW_POST,
  SET_POST_TO_EDIT,
  UPDATE_POST,
  DELETE_POST,
  LIKE_POST,
} from '../constants/postsConstants';

// 'postToEdit' refers to the _id of the current post to edit
const reducer = (state = { postsList: [], postToEdit: null }, action) => {
  switch (action.type) {
    case INITIALIZE_POSTS: {
      return { ...state, postsList: action.payload.posts };
    }

    case CREATE_NEW_POST: {
      return {
        ...state,
        postsList: [...state.postsList, action.payload.newPost],
      };
    }

    case SET_POST_TO_EDIT: {
      return { ...state, postToEdit: action.payload.id };
    }

    case UPDATE_POST:
    case LIKE_POST: {
      return {
        ...state,
        postsList: state.postsList.map((post) =>
          post._id !== action.payload.updatedPost._id
            ? post
            : action.payload.updatedPost
        ),
      };
    }

    case DELETE_POST: {
      return {
        ...state,
        postsList: state.postsList.filter(
          (post) => post._id !== action.payload.id
        ),
      };
    }

    default:
      return state;
  }
};

export default reducer;
