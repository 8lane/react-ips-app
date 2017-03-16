import React from 'react';

class TopicContainer extends React.Component {
  render() {
    return (
      <div className="Container">
        {this.props.children}
      </div>
    );
  }
}

export default TopicContainer;
