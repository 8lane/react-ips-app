import React from 'react';

import Topic from '../components/Topic';

class TopicContainer extends React.Component {
  constructor() {
    super();
    this.state = { totalPosts: null, posts: null };
  }

  componentDidMount() {
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

    const fetchTopic = fetch(`/api/forums/topics/${this.props.routeParams.id}`, requestOptions)
      .then(res => res.json())
      .catch(err => console.log(err));

    fetchTopic.then(data => this.setState({ totalPosts: data.totalResults, posts: data.results }));
  }

  render() {
    return (
      <div className="Container">
        <h1>Topic: xxx, total of {this.state.totalPosts} posts</h1>
        <Topic posts={this.state.posts} />
      </div>
    );
  }
}

export default TopicContainer;
