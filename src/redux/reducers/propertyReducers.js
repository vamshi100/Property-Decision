import {
  CALCULATE_CUMULATIVE_RISK,
  CALCULATE_RISK_SCORE,
  LOADING,
  MAX_OF_ALL_CUM_RISK_SCORES,
  REFERRAL_DATA,
  REFERRAL_LOADING,
  STORE_DATA,
  UPDATE_POLICY
} from '../actions/propertyActions';
import { initialState } from './initialState';

export default (state = initialState.property, action) => {
  switch (action.type) {
    case CALCULATE_CUMULATIVE_RISK:
      return {
        ...state,
        cumulativeRisk: action.payload
      }
    case CALCULATE_RISK_SCORE: 
      return {
        ...state,
        riskScore: action.payload
      }
    case LOADING:
      return {
        ...state,
        loading: action.payload
      }
    case MAX_OF_ALL_CUM_RISK_SCORES:
      return {
        ...state,
        maxOfAllCumRiskScores: action.payload
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
        cumulativeRiskParams: action.cumulativeRiskParams,
        policies: action.payload,
        loading: false
      }
    case UPDATE_POLICY:
      return {
        ...state,
        policies: [
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