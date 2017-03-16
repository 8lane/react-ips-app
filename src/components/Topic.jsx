import React from 'react';


class Topic extends React.Component {
  static createPostMarkup(post) {
    return { __html: post };
  }

  constructor() {
    super();
    this.state = { topic: null };
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

    fetchTopic.then(res => this.setState({ topic: res }));
  }

  render() {
    let topic = null;

    if (this.state.topic) {
      topic = this.state.topic.results.map(post =>
        <div key={post.id}>
          <div dangerouslySetInnerHTML={Topic.createPostMarkup(post.content)} />
        </div>
      );
    }

    return (
      <div>
        {this.state.topic &&
          <div>
            <h1>Topic: xxx, total of {this.state.topic.totalResults} posts</h1>
            {topic}
          </div>
        }
      </div>
    );
  }
}

// class TopicComponent extends React.Component {
//   render() {
//     return <h1>a wild topic! {this.props.routeParams.id}</h1>;
//   }
// }

export default Topic;
