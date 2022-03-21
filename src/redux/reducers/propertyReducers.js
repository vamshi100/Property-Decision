import {
  LOADING,
  STORE_DATA,
  UPDATE_POLICY
} from '../actions/propertyActions';
import {initialState} from './initialState';

export default (state = initialState.property, action) => {
  switch (action.type) {
    case STORE_DATA:
    return {
      ...state,
        policies: action.payload,
        loading: false
    }
    case LOADING:
    return {
      ...state,
        loading: action.payload
    }
    case UPDATE_POLICY:
    return {
      ...state,
        policies:[
          {
            ...state.policies[0],
            [action.variable]: action.payload
          }
        ]
    }
    default:
      return state; 
  }
}