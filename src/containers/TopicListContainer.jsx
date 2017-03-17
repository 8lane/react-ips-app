import React from 'react';
import { connect } from 'react-redux';
import store from '../store';

import TopicList from '../components/TopicList';

const TopicListContainer = class extends React.Component {
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

    const fetchTopicList = fetch('/api/forums/topics', requestOptions)
      .then(res => res.json())
      .catch(err => console.log(err));

    fetchTopicList.then((data) => {
      store.dispatch({
        type: 'TOPIC_LIST_SUCCESS',
        topics: data.results
      });
    });
  }

  render() {
    return <TopicList topics={this.props.topics} />;
  }
};

const mapStateToProps = function (store) {
  return {
    topics: store.topicListState.topics
  };
};

export default connect(mapStateToProps)(TopicListContainer);
