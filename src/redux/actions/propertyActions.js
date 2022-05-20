import _ from 'lodash';
export const STORE_DATA = 'STORE_DATA';
export const MAX_OF_ALL_CUM_RISK_SCORES = 'MAX_OF_ALL_CUM_RISK_SCORES';
export const CALCULATE_CUMULATIVE_RISK = 'CALCULATE_CUMULATIVE_RISK';
export const CALCULATE_RISK_SCORE = 'CALCULATE_RISK_SCORE';
export const LOADING = 'LOADING';
export const REFERRAL_DATA = 'REFERRAL_DATA';
export const REFERRAL_LOADING = 'REFERRAL_LOADING';
export const UPDATE_POLICY = 'UPDATE_POLICY';


export const calculateCumulativeRisk = (paramsArr) => {

  let sum = 0;
  paramsArr.forEach(item => {
    sum += parseFloat(item);
    return sum;
  })

  return {
    type: CALCULATE_CUMULATIVE_RISK,
    payload: sum / paramsArr.length
  }
}

export const calculateRiskScore = (cumulativeRisk, maxOfAllCumulativeRisk) => {
  debugger
  return {
    type: CALCULATE_RISK_SCORE,
    payload: cumulativeRisk / (Math.max(cumulativeRisk, maxOfAllCumulativeRisk))
  }
}

export const loadAllCumRiskScores = (data) => {
  const allCumRiskScores = data.map(policy => {
    return _.get(policy, '[Cum_risk]', null)
  });

  return {
    type: MAX_OF_ALL_CUM_RISK_SCORES,
    payload: Math.max(...allCumRiskScores),
  }
}

export const loadExcelData = (data, policyId) => {
  const payload = data.map(item => {
    return {
      policyId: _.get(item, '[Policy Number]', '-'),
      submissionID: _.get(item, '[Submission ID]', '-'),
      policyOwnerFullName: _.get(item, '[Policy Owner full name]', 'N/A'),
      effectiveDate: _.get(item, '[Policy Effective Date]', '2018-07-22'),
      streetAddress: _.get(item, '[Address_street]', ''),
      cityAddress: _.get(item, '[Address_city]', ''),
      stateAddress: _.get(item, '[Address_state]', ''),
      pinAddress: _.get(item, '[Address_pin]', ''),
      occupation: _.get(item, '[Occupation]', ''),
      occupationRisk: _.get(item, '[Occupation Risk]', 0),
      occupantsRisk: _.get(item, '[Occupants Risk]', 0),
      dwellingRisk: _.get(item, '[Dwelling risk]', 0),
      roofRisk: _.get(item, '[Roof risk]', 0),
      roofTypeRisk: _.get(item, '[Roof type risk]', 0),
      slidingRisk: _.get(item, '[Sliding risk]', 0),
      slopeRisk: _.get(item, '[Slope risk]', 0),
      garageRisk: _.get(item, '[Garage risk]', 0),
      squareFootRisk: _.get(item, '[Square foot risk]', 0),
      covARisk: _.get(item, '[Cov A risk]', 0),
      catClaimRisk: _.get(item, '[Cat claim risk]', 0),
      nonCatClaimRisk: _.get(item, '[Noncatclaim risk]', 0),
      liabilityClaimRisk: _.get(item, '[Liability claim Risk]', 0),
      protectionRisk: _.get(item, '[Protection risk]', 0),
      waterLossPrevRisk: _.get(item, '[Water Loss prev Risk]', 0),
      smartHomeRisk: _.get(item, '[Smart Home risk]', 0),
      videoHomeRisk: _.get(item, '[Video home risk]', 0),
      otherPoliciesRisk: _.get(item, '[Other policies risk]', 0),
      liabilityLimitRisk: _.get(item, '[Liability limit risk]', 0),
      deductibleRisk: _.get(item, '[Deductible Risk]', 0),
      priorInsuranceRisk: _.get(item, '[Prior Insurance Risk]', 0),
      riskScore: _.get(item, '[Norm_risk]', 0),
      priorInsurance: _.get(item, '[Prior Insurance]', ""),
      otherPolicies: _.get(item, '[Other Policies in Household]', ''),
      coverageA: _.get(item, '[Cov A Limits ($)]', ''),
      liabilityLimit: _.get(item, '[Liability Limits]', ''),
      // deductibleLimit: _.get(item, '[Deductible]', '0'),
      deductibleLimit: _.get(item, '[Deductible]', 0) < 1 ? `${_.get(item, '[Deductible]', 0) * 100}` : `${_.get(item, '[Deductible]', 0)}`,
      deductibleToken: _.get(item, '[Deductible]', 0) < 1 ? `percent` : `currency`,
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

  console.log("Filter Policy object ====> " + JSON.stringify(filterPolicy));



  return {
    type: STORE_DATA,
    payload: filterPolicy,
    cumulativeRiskParams: Array.from(Object.values(filterPolicy[0]).slice(9, 30))
  }
};

export const loadReferralData = (data) => {

  const payload = data.map((item, index) => {


    return {
      id: index,
      submissionId: _.get(item, '[Submission ID]', '-'),
      policyId: _.get(item, '[Policy Number]', '-'),
      effectiveDate: _.get(item, '[Policy Effective Date]', 'N/A'),
      dateReffered: _.get(item, '[Date Referred]', 'N/A'),
      daysPendingReview: _.get(item, '[Days Pending Review]', 'N/A'),
      status: _.get(item, '[Status]', 'N/A'),


    }
  });
  const filterRefferalByDateDesc = payload.sort((a, b) => new Date(b.effectiveDate) - new Date(a.effectiveDate));
  return {
    type: REFERRAL_DATA,
    payload: filterRefferalByDateDesc.slice(0, 100)
  }
};

export const loading = value => {
  return {
    type: LOADING,
    payload: value
  }
};


export const referralLoading = value => {
  return {
    type: REFERRAL_LOADING,
    payload: value
  }
};

export const updatePolicy = (variable, val) => {
  return {
    type: UPDATE_POLICY,
    variable: variable,
    payload: val
  }
}