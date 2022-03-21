import {createStore, compose, applyMiddleware} from 'redux';
import {routerMiddleware} from 'connected-react-router';
import {createBrowserHistory} from 'history';
import appReducer from './index';
import thunk from 'redux-thunk';

export const myHistory = createBrowserHistory();

const configureStore = initialState => {
  let enhancements = [];
  if (process.env.NODE_ENV !== 'production' && typeof window !== undefined && window.__REDUX_DEVTOOLS_EXTENSION__) {
    enhancements.push(window.__REDUX_DEVTOOLS_EXTENSION__());
  }
  let middleware = [thunk, routerMiddleware(myHistory)];
  
  const store = createStore(
    appReducer(myHistory),
    initialState,
    compose(
      applyMiddleware(...middleware),
      ...enhancements
    )
  )
  
  if (module.hot) {
    module.hot.accept('./index', () =>{
      store.replaceReducer(appReducer(myHistory));
    });
  }
  
  return store;
}

export default configureStore;