import React, {Component} from 'react';
import Proptypes from 'prop-types';
import _ from 'lodash';

import './riskScore.css'

class RiskScore extends Component {


  render = () => {
    const {
      property
    } = this.props;
    return (
      <div className="risk-score">
        <div className="risk-score-header">
          Policy Risk Score
        </div>
        <div className="risk-score-container">
          {Math.round(_.get(property, 'policies[0].riskScore', 0) * 1000) / 1000}
        </div>
        <button className="reset-risk-button">Reset Risk Score</button>
      </div>
    );

  };
}


RiskScore.propTypes = {
  property: Proptypes.any
};

export default RiskScore;
