import _ from 'lodash';
export const STORE_DATA = 'STORE_DATA';
export const LOADING = 'LOADING';
export const UPDATE_POLICY = 'UPDATE_POLICY';

export const loadExcelData = (data, policyId) => {
  const payload = data.map(item => {
    return {
      policyId: _.get(item, '[Policy Number]', '-'),
      submissionID: _.get(item, '[Submission ID]', '-'),
      effectiveDate: _.get(item, '[Effective Date]', '2018-07-22'),
      streetAddress: _.get(item, '[Address_street]', ''),
      cityAddress: _.get(item, '[Address_city]', ''),
      stateAddress: _.get(item, '[Address_state]', ''),
      pinAddress: _.get(item, '[Address_pin]', ''),
      occupation: _.get(item, '[Occupation]', ''),
      riskScore: _.get(item, '[Norm_risk]', 0),
      otherPolicies: _.get(item, '[Other Policies in Household]', ''),
      coverageA: _.get(item, '[Cov A Limits ($)]', ''),
      liabilityLimit: _.get(item, '[Liability Limits]', ''),
      // deductibleLimit: _.get(item, '[Deductible]', '0'),
      deductibleLimit: _.get(item, '[Deductible]', 0)  < 1 ? `${_.get(item, '[Deductible]', 0) * 100}` :`${_.get(item, '[Deductible]', 0)}`,
      deductibleToken: _.get(item, '[Deductible]', 0)  < 1 ? `percent` :`currency`,
      ageOfDwelling: _.get(item, '[Age of dwelling(Yrs)]', ''),
      ageOfroof: _.get(item, '[Age of roof(yrs)]', ''),
      roofType: _.get(item, '[Roof type]', ''),
      siding: _.get(item, '[Siding]', ''),
      garage: _.get(item, '[Garage]', ''),
      dwellingSqft: _.get(item, '[Dwelling Square foot]', ''),
      waterLossPrevention: _.get(item, '[Water Loss Prevention Device]', ''),
      smartDwelling: _.get(item, '[Smart Home]', ''),
      videoAndSmartDwelling: _.get(item, '[Video & Smart Home]', ''),
      catClaims: `${item['# of CAT claims (in 3 yrs.)']}`,
      nonCatClaims: `${item['# of Non-CAT claims (in 3 yrs.)']}`,
      liabilityClaims: `${item['# of Liability claims (in 3 yrs.)']}`,
      protectionClass: _.get(item, '[Protection Class]', ''),
      conditionConcerns: _.get(item, '[Property Condition Concerns]', ''),
      ratingConcerns: _.get(item, '[Rating Concerns]', ''),
      liabilityConcerns: _.get(item, '[Liability Concern]', ''),
      climateRisk: _.get(item, '[Climate Risk ]', ''),
      underwritingComments: '',
      underwritingActions: ''
    }
  });
  const filterPolicy = payload.filter(item => item.policyId === policyId.trim());
  return {
    type: STORE_DATA,
    payload: filterPolicy
  }
};

export const loading = val => {
  return {
    type: LOADING,
    payload: val
  }
};

export const updatePolicy = (variable, val) => {
  return {
    type: UPDATE_POLICY,
    variable,
    payload: val
  }
}