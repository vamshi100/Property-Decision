import React, {Component} from 'react';
import _ from 'lodash';
import CustomForm from '../common/customForm';

import './underwritingComments.css'

class UnderwritingComments extends Component {


  render = () => {
    const {
      property,
      updatePolicy
    } = this.props;
    const config = [
      {
        name: 'Underwriting Comments',
        component: 'textarea',
        htmlFor:"Underwriting Comments",
        id: 'Named Insured Underwriting Comments',
        data: _.get(property, 'policies[0].underwritingComments', ''),
        className: 'UnderwritingComments',
        stateVariable: 'underwritingComments',
        action: updatePolicy
      }
    ];
    const config2 = [
      {
        name: 'Underwriting Actions',
        component: 'select',
        htmlFor:"Underwriting Actions",
        label:"Underwriting Actions",
        id: 'Underwriting Actions',
        className: 'underwritingActions',
        list: ['', 'Accept As Is', 'Accept with modification', 'Decline'],
        value: _.get(property, 'policies[0].underwritingActions', ''),
        stateVariable: 'underwritingActions',
        action: updatePolicy
      }
    ]
    return (
      <div className="property-characteristics">
        <h3>Underwriting Comments</h3>
        <div className="characteristics">
          <CustomForm config={config} />
        </div>
        <h3>Underwriting Actions</h3>
        <div className="characteristics">
          <CustomForm config={config2} />
        </div>
      </div>
    );

  };
}


export default UnderwritingComments;
