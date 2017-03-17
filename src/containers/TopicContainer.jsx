import React from 'react';

import Topic from '../components/Topic';

class TopicContainer extends React.Component {
  constructor() {
    super();
    this.state = { topicData: null };
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

    fetchTopic.then(res => this.setState({ topicData: res }));
  }

  render() {
    return (
      <div className="Container">
        <Topic topic={this.state.topicData} />
      </div>
    );
  }
}

export default TopicContainer;
