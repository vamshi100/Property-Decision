import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import './index.css';
import App from './container';
import { AppContainer } from 'react-hot-loader';
import configureStore, { myHistory } from './redux/reducers/configureStore';

export const myStore = configureStore();
ReactDOM.render(
  // <AppContainer>
    <Provider store={myStore}>
      {/* <ConnectedRouter history={myHistory}> */}
        <App />
      {/* </ConnectedRouter> */}
    </Provider>,
  // </AppContainer>,
  document.getElementById('root')
);
