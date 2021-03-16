import { INITIALIZE_POSTS, CREATE_NEW_POST } from '../constants/postsConstants';

const reducer = (state = [], action) => {
  switch (action.type) {
    case INITIALIZE_POSTS: {
      return action.payload.posts;
    }

    case CREATE_NEW_POST: {
      return state;
    }
    default:
      return state;
  }
};

export default reducer;
