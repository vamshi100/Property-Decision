import React, {Component} from 'react';
import _ from 'lodash';
import CustomForm from '../common/customForm';
import './policyLimits.css';


class PolicyLimits extends Component {
  
  renderPolicyLimits() {
    const {
      property,
      updatePolicy
    } = this.props;
    const policyLimitsConfig = [
      {
        name: 'Coverage A',
        component: 'text',
        htmlFor:"Coverage A",
        label:"Coverage A",
        type: 'text',
        className: 'coverageA',
        value: `${_.get(property, 'policies[0].coverageA', '')}`,
        stateVariable: 'coverageA',
        action: updatePolicy,
        token: 'currency'
      },
      {
        name: 'Liability Limit',
        component: 'text',
        htmlFor:"Liability Limit",
        label:"Liability Limit",
        type: 'text',
        className: 'liabilityLimit',
        value: `${_.get(property, 'policies[0].liabilityLimit', '')}`,
        stateVariable: 'liabilityLimit',
        action: updatePolicy,
        token: 'currency'
      },
      {
        name: 'Deductible Limit',
        component: 'text',
        htmlFor:"Deductible Limit",
        label:"Deductible Limit",
        type: 'text',
        className: 'deductibleLimit',
        value: `${_.get(property, 'policies[0].deductibleLimit', '')}`,
        stateVariable: 'deductibleLimit',
        action: updatePolicy,
        token: _.get(property, 'policies[0].deductibleToken', '')
      },
    ];
    return (
      <div className="policy-limits">
        <h3>Policy Limits</h3>
        <div className="limits">
          <CustomForm config={policyLimitsConfig} />
        </div>
      </div>
    );
  }

  render = () => {
    return (
      this.renderPolicyLimits()
    );

  };
}

export default PolicyLimits;
