import React, {Component} from 'react';
import _ from 'lodash';
import './otherPolicies.css'

class OtherActivePolicies extends Component {

  render = () => {
    const {
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
      <div className="other-policy-container">
        <div className="other-policy-header">
          Other Active Policies
        </div>
        <div className="other-policy-body">
          {otherPolicies}
        </div>
      </div>
    );

  };
}

export default OtherActivePolicies;
