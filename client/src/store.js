import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import postsReducer from './reducers/postsReducer';
import authReducer from './reducers/authReducer';

const reducers = combineReducers({
  posts: postsReducer,
  loggedUser: authReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
