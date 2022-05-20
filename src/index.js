import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import './index.css';
import App from './container';
import { AppContainer } from 'react-hot-loader';
import configureStore, { myHistory } from './redux/reducers/configureStore';

// MUI Theme import
import { ThemeProvider, createTheme } from '@mui/material/styles';

export const myStore = configureStore();

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(0, 120, 215)',
    },
  },
  typography: {
    h6: {
      fontWeight: 600,
    },
  },
});

ReactDOM.render(
  <Provider store={myStore}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,

  document.getElementById('root')
);
