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
        component: 'select',
        htmlFor:"Liability Limit",
        label:"Liability Limit",
        id:"Liability Limit",
        className: 'liabilityLimit',
        list: ['$500000', '$1000000', '$2000000', '$3000000'],
        value: `$${_.get(property, 'policies[0].liabilityLimit', '')}`,
        stateVariable: 'liabilityLimit',
        action: updatePolicy,
        disabled: false
      },
      {
        name: 'Deductible Limit',
        component: 'select',
        htmlFor:"Deductible Limit",
        label:"Deductible Limit",
        id: 'Deductible Limit',
        className: 'deductibleLimit',
        list: ['$1000', '$2000', '$3000', '$4000', '1%', '2%'],
        value: `${_.get(property, 'policies[0].deductibleToken', '') === 'percent' ? `${_.get(property, 'policies[0].deductibleLimit', '')}%` : `$${_.get(property, 'policies[0].deductibleLimit', '')}`}`,
        stateVariable: 'deductibleLimit',
        action: updatePolicy,
        disabled: false
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
