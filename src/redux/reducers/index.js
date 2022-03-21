import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import propertyReducer from './propertyReducers';

const appReducer = history =>
  combineReducers({
    router: connectRouter(history),
    property: propertyReducer
  });

export default appReducer;