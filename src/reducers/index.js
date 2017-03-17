import { combineReducers } from 'redux';

import topicList from './topic-list-reducer';
import posts from './posts-reducer';

const reducers = combineReducers({
  topicListState: topicList,
  postsState: posts
});

export default reducers;
