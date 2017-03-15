import React from 'react';

class TopicList extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    let topics = null;

    if (this.props.topics) {
      topics = this.props.topics.map(topic =>
        <li key={topic.id}>
          <h3>{topic.title}</h3>
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
