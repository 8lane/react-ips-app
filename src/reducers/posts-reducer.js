import {
  FETCH_POSTS, GOT_POSTS, FAILED_POSTS
} from '../actions/action-types';

const initialState = {
  isFetching: false,
  topicId: null,
  posts: [],
  totalPosts: 0,
  hasError: false
};

const postsReducer = function (state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        isFetching: true
      };

    case GOT_POSTS:
      if (typeof action.posts === 'undefined') {
        return {
          ...state,
          isFetching: false,
          hasError: true
        };
      }

      return {
        ...state,
        isFetching: false,
        topicId: action.topicId,
        posts: action.posts,
        totalPosts: action.totalPosts
      };

    case FAILED_POSTS:
      return {
        ...state,
        isFetching: false,
        hasError: true
      };

    default:
      return state;
  }
};

export default postsReducer;
