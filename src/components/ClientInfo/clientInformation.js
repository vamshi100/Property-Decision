import React, {Component} from 'react';
import _ from 'lodash';
import CustomForm from '../common/customForm';
import './clientInformation.css';
import { update } from 'immutable';


class ClientInformation extends Component {
  renderClientInformation() {
    const {
      property,
      updatePolicy
    } = this.props;
    const clientInfoConfig = [
      {
        name: 'Submission ID',
        component: 'text',
        htmlFor:"Submission ID",
        label:"Submission ID",
        type: 'text',
        className: 'submissionId',
        value: _.get(property, 'policies[0].submissionID', ''),
        disabled: true
      },
      {
        name: 'Effective Date',
        component: 'date',
        htmlFor:"Effective Date",
        label:"Effective Date",
        type: 'text',
        className: 'effectiveDate',
        value: _.get(property, 'policies[0].effectiveDate', ''),
        disabled: true
      },
      {
        name: 'Address',
        component: 'textarea',
        htmlFor:"Address",
        label:"Address",
        id: 'Named Insured Address',
        data: '1234 tst st, test, usa.',
        className: 'address',
        value: `${_.get(property, 'policies[0].streetAddress', '')}
        \n${_.get(property, 'policies[0].cityAddress', '')}
        \n${_.get(property, 'policies[0].stateAddress', '')}
        \n${_.get(property, 'policies[0].pinAddress', '')}`,
        disabled: true
      },
      {
        name: 'Occupation',
        component: 'select',
        htmlFor:"Occupation",
        label:"Occupation",
        id: 'Named Insured Occupation',
        className: 'occupation',
        list: ['Manager', 'Teacher', 'Clerk', 'Student', 'Retired', 'other'],
        value: _.get(property, 'policies[0].occupation', ''),
        disabled: false,
        stateVariable: 'occupation',
        action: updatePolicy
      }
    ];
    return (
      <div className="client-Information">
        <h3>Client Information</h3>
        <CustomForm config={clientInfoConfig} />
      </div>
    );
  }

  render = () => {
    return (
      this.renderClientInformation()
    );

  };
}
ClientInformation.defaultProps = {
  property: {
    policies: [
      {
        submissionID: '',
        effectiveDate: '',
        streetAddress: '',
        cityAddress: '',
        stateAddress: '',
        pinAddress: '',
        occupation: ''
      }
    ]
  }
}
export default ClientInformation;
