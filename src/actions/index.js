const fetchPosts = topicId => (dispatch) => {
  dispatch({ type: 'FETCH_POSTS' });

  const username = '570dd55cef79003861ef3a2e936d87fb';
  const password = '';
  const auth = `${username}:${password}`;

  const requestOptions = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Authorization': `Basic ${btoa(auth)}`
    }
  };

  return fetch(`/api/forums/topics/${topicId}`, requestOptions)
    .then(res => res.json())
    .then(json => dispatch({
      topicId,
      type: 'GOT_POSTS',
      posts: json.results,
      totalPosts: json.totalResults
    }))
    .catch(() => dispatch({
      type: 'FAILED_POSTS',
      hasError: true
    }));
};

const shouldFetchPosts = (state, topicId) => {
  const posts = state.postsState.posts; /* make topics property id? */

  if (topicId !== state.postsState.topicId || !posts.length) {
    return true;
  }

  if (state.postsState.isFetching) {
    return false;
  }

  return true;
};

export const requestPosts = reddit => ({
  type: 'REQUEST_POSTS',
  reddit
});

export const fetchPostsIfNeeded = topicId => (dispatch, getState) => {
  if (shouldFetchPosts(getState(), topicId)) {
    return dispatch(fetchPosts(topicId));
  }

  return false;
};
