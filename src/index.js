import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import App from './App';
import './index.css';
import './styles';
import './scripts';

import IndexView from './views/IndexView';
import ChatAppWebsiteView from './views/ChatAppWebsiteView';
import TeamAppView from './views/TeamAppView';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={IndexView} />
      <Route path="/team-app" component={TeamAppView} />
      <Route path="/chat-app-website" component={ChatAppWebsiteView} />
    </Switch>
  </BrowserRouter>
  // <React.StrictMode>
  //   <IndexView />
  // </React.StrictMode>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
