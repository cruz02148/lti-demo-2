// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Router, Route, browserHistory } from 'react-router';
// import App from './scripts/components/app';
// import PromptBox from './scripts/components/prompt';
// import Workout from './scripts/components/Workout1';
// import Workout2 from './scripts/components/Workout2';
// require('./styles/style.css');

// This is the new component for the Workout. This will need to be modified to use React-Router
// ReactDOM.render((
//   <Router history={browserHistory}>
//     <Route component={App}>
//       <Route path="/" component={PromptBox} />
//       <Route path="workout1" component={Workout} />
//       <Route path="workout2" component={Workout2} />
//     </Route>
//   </Router>
// ), document.querySelector('.container'));

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './styles/style.css';

import App from './scripts/components/app';
import reducers from './scripts/reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

injectTapEventPlugin();

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
