import {
  FETCH_POSTS, GOT_POSTS
} from '../actions/action-types';

const initialState = {
  isFetching: false,
  posts: [],
  totalPosts: 0
};

const postsReducer = function (state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      console.log('fetch: ', state);
      return {
        ...state,
        isFetching: true
      };

    case GOT_POSTS:
      console.log('got: ', state);
      return {
        ...state,
        isFetching: false,
        posts: action.posts,
        totalPosts: action.totalPosts
      };

    default:
      return state;
  }
};

export default postsReducer;
