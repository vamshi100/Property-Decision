import React, { useEffect } from 'react';
import Proptypes from 'prop-types';
import _ from 'lodash';

import './riskScore.css'

// Redux functions


// MUI Components
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function RiskScore (props) {

  const {calculateRiskScore, primary, property, state, setState} = props;


    return (
      <Grid container direction="column" className="risk-score-wrapper" xs={3}>
        <Grid container className="risk-score-sub-wrapper" direction='column'>
          <Grid item className="risk-score-header" backgroundColor={primary}>
            Policy Risk Score
          </Grid>
          <Grid item className="risk-score-container">
            {property.riskScore.toFixed(3)}
          </Grid>
        </Grid>

        <button className="reset-risk-button" onClick={() => calculateRiskScore(property.cumulativeRisk, property.maxOfAllCumRiskScores)} style={{ backgroundColor: `${primary}`, cursor: 'pointer' }}>Recalculate <br/> Risk Score</button>
      </Grid>
    );

  }



RiskScore.propTypes = {
  property: Proptypes.any
};

export default RiskScore;
