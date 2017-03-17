import React from 'react';


class Topic extends React.Component {
  static createPostMarkup(post) {
    return { __html: post };
  }

  static createPost(post) {
    return (
      <div key={post.id}>
        <div dangerouslySetInnerHTML={Topic.createPostMarkup(post.content)} />
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.props.topic &&
          <div>
            <h1>Topic: xxx, total of {this.props.topic.totalResults} posts</h1>
            {this.props.topic.results.map(post => Topic.createPost(post))}
          </div>
        }
      </div>
    );
  }
}

export default Topic;
