import React, {Component} from 'react';
import _ from 'lodash';
import CustomForm from '../common/customForm';
import './riskManagement.css';


class RiskManagement extends Component {
  constructor(props){
    super(props);
    this.state = {
      policyNumber: ''
    };
  }
  
  renderRiskManagement() {
    const {
      property,
      updatePolicy
    } = this.props;
    const RiskManagementConfig = [
      
      {
        name: 'Rating Concerns',
        component: 'select',
        htmlFor:"Rating Concerns",
        label:"Rating Concerns",
        id: 'Rating Concerns',
        className: 'ratingConcerns',
        list: ['Yes', 'No'],
        hasLink: true,
        value: (_.get(property, 'policies[0].ratingConcerns', '')),
        stateVariable: 'ratingConcerns',
        action: updatePolicy,
      },
      {
        name: 'Condition Concerns',
        component: 'select',
        htmlFor:"Condition Concerns",
        label:"Condition Concerns",
        id: 'Condition Concerns',
        className: 'conditionConcerns',
        list: ['Yes', 'No'],
        hasLink: true,
        value: (_.get(property, 'policies[0].conditionConcerns', '')),
        stateVariable: 'conditionConcerns',
        action: updatePolicy,
      },
      {
        name: 'Property with Liability Concerns',
        component: 'select',
        htmlFor:"Property with Liability Concerns",
        label:"Property with Liability Concerns",
        id: 'Property with Liability Concerns',
        className: 'liabilityConcerns',
        list: ['Yes', 'No'],
        hasLink: true,
        value: (_.get(property, 'policies[0].liabilityConcerns', 'No')),
        stateVariable: 'liabilityConcerns',
        action: updatePolicy,
      },
      // {
      //   name: 'Climate Risk',
      //   component: 'select',
      //   htmlFor:"Climate Risk",
      //   label:"Climate Risk",
      //   id: 'Climate Risk',
      //   className: 'climateRisk',
      //   list: ['Yes', 'No'],
      //   hasLink: true,
      //   value: (_.get(property, 'policies[0].climateRisk', '')),
      //   stateVariable: 'climateRisk',
      //   action: updatePolicy,
      // }
    ];
    return (
      <div className="property-characteristics">
        <h3>Risk Management/ Mitigation</h3>
        <div className="characteristics">
          <CustomForm config={RiskManagementConfig} />
        </div>
      </div>
    );
  }

  renderLinks() {
    const {
      property
    } = this.props
    return(
      <div className="href">
        <a className="conditionConcerns" href="http://www.google.com" target="_blank" rel="noreferrer">
          See Evidence
        </a>
        <a className="ratingConcerns" href="http://www.google.com" target="_blank" rel="noreferrer">
          See Evidence
        </a>
        <a className="liabilityConcerns" href="http://www.google.com" target="_blank" rel="noreferrer">
          See Evidence
        </a>
        {/* <a className={`climateRisk ${_.get(property, 'policies[0].climateRisk', '') === 'No' ? 'anchorDisabled' : ''}`} href="http://www.google.com" target="_blank" rel="noreferrer">
          See Evidence
        </a> */}
      </div>
    )

  }

  render = () => {
    return (
      <React.Fragment>
        {this.renderRiskManagement()}
        {this.renderLinks()}
      </React.Fragment>
    );

  };
}

export default RiskManagement;
