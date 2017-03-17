import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './App';

import TopicListContainer from './containers/TopicListContainer';
import TopicContainer from './containers/TopicContainer';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={TopicListContainer} />
      <Route path="topic">
        <IndexRoute component={TopicListContainer} />
        <Route path=":id" component={TopicContainer} />
      </Route>
    </Route>
  </Router>
);
