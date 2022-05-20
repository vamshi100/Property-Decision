import React, {Component} from 'react';
import _ from 'lodash';
import './otherPolicies.css'

// MUI Components
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

class OtherActivePolicies extends Component {

  render = () => {
    const {
      primary,
      property
    } = this.props;
    let otherPolicies;
    otherPolicies = (
          <div className="otherPolicies_link" key="single other">
            {`1. ${_.get(property, 'policies[0].otherPolicies', '')}\n`}
          </div>
        );
    if (Array.isArray(_.get(property, 'policies[0].otherPolicies', ''))) {
      if (_.get(property, 'policies[0].otherPolicies', '').length > 1) {
        otherPolicies = (
          _.map(_.get(property, 'policies[0].otherPolicies', ''), (item, idx) => {
            return (
              <div className="otherPolicies_link" key={idx}>
                {`${idx}. ${item}\n`}
              </div>
            );
          })
        );
      } else {
        otherPolicies = (
              <div className="otherPolicies_link" key="single other">
                {`1. ${_.get(property, 'policies[0].otherPolicies', '')}\n`}
              </div>
            );
      }
    }
    return (
      <Grid container className="other-policy-container" xs={3}>
        <Grid container direction="column">
        <Grid item className="other-policy-header" backgroundColor={primary}>
          Other Active Policies
        </Grid>
        <Grid item className="other-policy-body">
          {otherPolicies}
        </Grid>
        </Grid>
      </Grid>
    );

  };
}

export default OtherActivePolicies;
