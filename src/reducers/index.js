import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import FetchPosts from './reducer_posts';


const rootReducer = combineReducers({
  posts:FetchPosts,
  form: formReducer
});

export default rootReducer;
