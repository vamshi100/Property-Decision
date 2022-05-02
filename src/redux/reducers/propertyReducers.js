import {
  LOADING,
  REFERRAL_DATA,
  REFERRAL_LOADING,
  STORE_DATA,
  UPDATE_POLICY
} from '../actions/propertyActions';
import {initialState} from './initialState';

export default (state = initialState.property, action) => {
  switch (action.type) {
    case LOADING:
    return {
      ...state,
        loading: action.payload
    }
    case REFERRAL_DATA:
    return {
      ...state,
      referralData: action.payload,
        loading: false
    }
    case REFERRAL_LOADING:
    return {
      ...state,
      referralDataIsLoading: action.payload
    }
    case STORE_DATA:
    return {
      ...state,
        policies: action.payload,
        loading: false
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