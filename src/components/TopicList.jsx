import React from 'react';
import { Link } from 'react-router';

class TopicList extends React.Component {
  render() {
    let topics = null;

    if (this.props.topics) {
      topics = this.props.topics.map(topic =>
        <li key={topic.id}>
          <Link to={`/topic/${topic.id}`}>
            <h3>{topic.title}</h3>
          </Link>
        </li>
      );
    }

    return <ul>{topics}</ul>;
  }
}

TopicList.propTypes = {
  topics: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
};

export default TopicList;
