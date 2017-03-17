import { combineReducers } from 'redux';

import topicListReducer from './topic-list-reducer';

const reducers = combineReducers({
  topicListState: topicListReducer
});

export default reducers;
