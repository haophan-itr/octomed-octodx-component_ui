import React from 'react';

import {
  Route, Switch, BrowserRouter as Router,
} from 'react-router-dom';

import Main from './layout/Main/main';
import './styles/_toastr.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';


const App = props => (
  <Router>
    <Switch>
      <Route path="/" name="Main" component={Main} />
    </Switch>
  </Router>
);

export default App;
