import React from 'react';

import TopicList from '../components/TopicList';

class TopicListContainer extends React.Component {
  constructor() {
    super();
    this.state = { topics: [] };
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

    const fetchApiDefaults = fetch('/api/forums/topics', requestOptions)
      .then(res => res.json())
      .catch(err => console.log(err));

    fetchApiDefaults.then(data => this.setState({ topics: data.results }));
  }

  render() {
    return <TopicList topics={this.state.topics} onTopicOpen={this.handleTopicOpen} />;
  }
}

export default TopicListContainer;
