import {hot} from 'react-hot-loader/root';
import React, {Component} from 'react';
import {Switch, Route, BrowserRouter, withRouter} from 'react-router-dom';
import MainPage from './components/MainPage/container';
import PolicyPage from './components/PolicyPage/container';
import './App.css';

// MUI Theme import
import { ThemeProvider, createTheme } from '@mui/material/styles';

class App extends Component {
  render = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/policy-page/:id" component={PolicyPage} />
        </Switch>
      </BrowserRouter>
    );
  };
}

export default hot(App);
