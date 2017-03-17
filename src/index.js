import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';

import App from './App';
import TopicListContainer from './containers/TopicListContainer';
import TopicContainer from './containers/TopicContainer';

import './index.css';

const rootElement = document.getElementById('root');

class About extends React.Component {
  render() {
    return <h1>About!!!</h1>;
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={TopicListContainer} />
        <Route path="about" component={About} />
        <Route path="topic">
          <IndexRoute component={TopicListContainer} />
          <Route path=":id" component={TopicContainer} />
        </Route>
      </Route>
    </Router>
  </Provider>,
  rootElement
);
