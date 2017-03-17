import React from 'react';
import { Link } from 'react-router';

class TopicList extends React.Component {
  static createTopicItem(topic) {
    return (
      <li key={topic.id}>
        <Link to={`/topic/${topic.id}`}>
          <h3>{topic.title}</h3>
        </Link>
      </li>
    );
  }

  render() {
    return <ul>{this.props.topics.map(topic => TopicList.createTopicItem(topic))}</ul>;
  }
}

TopicList.propTypes = {
  topics: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
};

export default TopicList;
