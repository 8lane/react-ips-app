import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPostsIfNeeded } from '../actions';

import Topic from '../components/Topic';

class TopicContainer extends React.Component {
  static propTypes = {
    isFetching: PropTypes.bool.isRequired,
    posts: PropTypes.arrayOf(PropTypes.object).isRequired,
    totalPosts: PropTypes.number.isRequired,
    hasError: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchPostsIfNeeded(this.props.routeParams.id));
  }

  render() {
    return (
      <div className="Container">
        {this.props.isFetching &&
          <span>hi</span>
        }

        {this.props.hasError &&
          <span>Uh oh, something broke whilst fetching posts!</span>
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
  const { isFetching, posts, totalPosts, hasError } = postsState || {
    isFetching: true,
    posts: [],
    hasError: false
  };

  return {
    isFetching,
    posts,
    totalPosts,
    hasError
  };
};

export default connect(mapStateToProps)(TopicContainer);
