import React from 'react';
import { connect } from 'react-redux';
import store from '../store';

import TopicList from '../components/TopicList';

class TopicListContainer extends React.Component {
  static fetchTopicList() {
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

    return fetch('/api/forums/topics', requestOptions)
      .then(res => res.json())
      .then((data) => {
        store.dispatch({
          type: 'TOPIC_LIST_SUCCESS',
          topics: data.results
        });
      })
      .catch(err => console.log(err));
  }

  componentDidMount() {
    TopicListContainer.fetchTopicList();
  }

  render() {
    return <TopicList topics={this.props.topics} />;
  }
}

const mapStateToProps = function (store) {
  return {
    topics: store.topicListState.topics
  };
};

export default connect(mapStateToProps)(TopicListContainer);
