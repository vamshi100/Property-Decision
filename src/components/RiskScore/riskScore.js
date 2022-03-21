import React, {Component} from 'react';
import Proptypes from 'prop-types';

import './riskScore.css'

class RiskScore extends Component {


  render = () => {
    const {
      score
    } = this.props;
    return (
      <div className="risk-score">
        <div className="risk-score-header">
          Policy Risk Score
        </div>
        <div className="risk-score-container">
          {score}
        </div>
        <button className="reset-risk-button">Reset Risk Score</button>
      </div>
    );

  };
}

RiskScore.defaultProps = {
  score: 10
};

RiskScore.propTypes = {
  score: Proptypes.any
};

export default RiskScore;
