import React, {Component} from 'react';
import _ from 'lodash';
import CustomForm from '../common/customForm';
import './clientInformation.css';


// MUI Components
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

class ClientInformation extends Component {
  renderClientInformation() {
    const {
      property,
      updatePolicy
    } = this.props;
    const addressText = () => {
      return (
        <div>
          Named Insured <br/> Address <br/> City <br/> State <br/> Zip code
        </div>
      )
    };
    const occupationText = () => {
      return (
        <div>
          Named Insured <br/> Occupation
        </div>
      )
    };
    const clientInfoConfig = [
      {
        name: 'Policy Owner full name',
        component: 'text',
        htmlFor:"Policy Owner full name",
        label:"Policy Owner",
        type: 'text',
        className: 'policy-owner-full-name',
        value: _.get(property, 'policies[0].policyOwnerFullName', ''),
        disabled: true
      },
      {
        name: 'Address',
        component: 'textarea',
        htmlFor:"Address",
        label: addressText(),
        id: 'Named Insured Address',
        data: '1234 tst st, test, usa.',
        className: 'address',
        value: `${_.get(property, 'policies[0].streetAddress', '')}
        '\n${_.get(property, 'policies[0].cityAddress', '')}
        \n${_.get(property, 'policies[0].stateAddress', '')}
        \n${_.get(property, 'policies[0].pinAddress', '')}`,
        disabled: true
      },
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
        name: 'Prior Insurance',
        component: 'text',
        htmlFor:"Prior Insurance",
        label:"Prior Insurance",
        type: 'text',
        className: 'priorInsurance',
        value: _.get(property, 'policies[0].priorInsurance', ''),
        disabled: true
      },
      {
        name: 'Occupation',
        component: 'select',
        htmlFor:"Occupation",
        label: occupationText(),
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
      <Grid container xs={6} className="client-Information">
        <Grid item xs={12} style={{margin: '0 0 10px 0'}}>
        <Typography variant='h6'>
          Client Information
          </Typography>
        </Grid>
        
        <CustomForm config={clientInfoConfig} formType="client-information" />

        
      </Grid>
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
