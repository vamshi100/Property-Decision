import React, {Component} from 'react';
import _ from 'lodash';
import CustomForm from '../common/customForm';
import './policyLimits.css';

// MUI Components
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { withTheme } from '@mui/styles';


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
        disabled: false,
        section: 'policyLimits'
      },
      {
        name: 'Deductible Limit',
        component: 'select',
        htmlFor:"Deductible Limit",
        label:"Deductible Limit",
        id: 'Deductible Limit',
        className: 'deductibleLimit',
        list: ['$1000', '$2000', '$3000', '$4000', '1%', '2%'],
        value: `${_.get(property, 'policies[0].deductibleLimit', 0) < 5 ? `${_.get(property, 'policies[0].deductibleLimit', '')}%` : `$${_.get(property, 'policies[0].deductibleLimit', '')}`}`,
        stateVariable: 'deductibleLimit',
        action: updatePolicy,
        disabled: false,
        section: 'policyLimits'
      },
    ];
    return (
      <Grid container xs={12} className="policy-limits">
        <Typography variant='h6'>Policy Limits</Typography>
        <Grid item xs={12} className="limits" >
          <CustomForm config={policyLimitsConfig} formType="policy-limits" />
        </Grid>
      </Grid>
    );
  }

  render = () => {
    return (
      this.renderPolicyLimits()
    );

  };
}

export default PolicyLimits;
