import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import store from '../store';

import Topic from '../components/Topic';

class TopicContainer extends React.Component {
  static propTypes = {
    isFetching: PropTypes.bool.isRequired,
    posts: PropTypes.arrayOf(PropTypes.object).isRequired,
    totalPosts: PropTypes.number.isRequired
  };

  componentDidMount() {
    store.dispatch({ type: 'FETCH_POSTS' });

    this.fetchPosts().then((data) => {
      store.dispatch({
        type: 'GOT_POSTS',
        posts: data.results,
        totalPosts: data.totalResults
      });
    });
  }

  fetchPosts() {
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

    return fetch(`/api/forums/topics/${this.props.routeParams.id}`, requestOptions)
      .then(res => res.json())
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="Container">
        {this.props.isFetching &&
          <span>hi</span>
        }
        {this.props.posts.length > 0 &&
          <div>
            <h1>Topic: xxx, total of {this.props.totalPosts} posts</h1>
            <Topic posts={this.props.posts} />
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  const { postsState } = state;
  const { isFetching, posts, totalPosts } = postsState || {
    isFetching: true,
    posts: []
  };

  return {
    isFetching,
    posts,
    totalPosts
  };
};

export default connect(mapStateToProps)(TopicContainer);
