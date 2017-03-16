import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './App';
import TopicListContainer from './containers/TopicListContainer';
import TopicContainer from './containers/TopicContainer';
import Topic from './components/Topic';

import './index.css';

const rootElement = document.getElementById('root');

class About extends React.Component {
  render() {
    return <h1>About!!!</h1>;
  }
}

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={TopicListContainer} />
      <Route path="about" component={About} />
      <Route path="topic" component={TopicContainer}>
        <Route path=":id" component={Topic} />
      </Route>
    </Route>
  </Router>,
  rootElement
);
