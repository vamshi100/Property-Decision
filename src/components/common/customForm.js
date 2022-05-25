import Proptypes from 'prop-types';
import React, { Component } from 'react';
import CustomInput from './customInput';
import CustomLabel from './customLabel';
import CustomTextArea from './customTextarea';
import CustomSelect from './customSelect';


// MUI Components
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { withTheme } from '@mui/styles';


class ClientForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      policyNumber: ''
    };
  }

  renderClientForm(config) {
    const { formType } = this.props;
    const clientFields = config.map((item, idx) => {
      let inputField = null;

      if (item.component === 'text' || item.component === 'date') {
        inputField = (
          <div className={item.className} key={idx}>
            <CustomLabel htmlFor={item.htmlFor} label={item.label} />
            <CustomInput
              name={item.name}
              type={item.type}
              value={item.value}
              disabled={item.disabled}
              action={item.action}
              stateVariable={item.stateVariable}
              token={item.token}
            />
          </div >
        )
      } else if (item.component === 'textarea') {
        inputField = (
          <div className={item.className} key={idx}>
            <CustomLabel htmlFor={item.htmlFor} label={item.label} />
            <CustomTextArea
              name={item.name}
              id={item.id}
              data={item.data}
              value={item.value}
              disabled={item.disabled}
              action={item.action}
              stateVariable={item.stateVariable}
            />
          </div >
        )
      } else if (item.component === 'select') {
        inputField = (
          <div className={item.className} key={idx}>
            <CustomLabel htmlFor={item.htmlFor} label={item.label} />
            <CustomSelect
              name={item.name}
              id={item.id}
              list={item.list}
              value={item.value}
              disabled={item.disabled}
              action={item.action}
              stateVariable={item.stateVariable}
              section={item.section}
            />
          </div >
        )
      }

      return inputField;

    });

    

    let code;

    if(formType === 'client-information'){
        code = 
        <Grid container style={{display: 'flex', justifyContent: 'flex-start'}}>
        <Grid item direction="column" style={{margin: '0 30px 0 0'}}>
          {clientFields.slice(0,2)}
        </Grid>
        <Grid item direction="column">
        {clientFields.slice(2)}
      </Grid>
      </Grid>
    } else if (formType === 'policy-limits') {
      code = 
      <Grid container xs={12} style={{justifyContent: 'flex-start'}}>
        {clientFields}
      </Grid>
    } else if (formType === 'property-characteristics') {
      code = 
      <Grid container xs={12} style={{justifyContent: 'flex-start'}}>
        <Grid item direction='column' xs={4}>
        {clientFields[0]}
        {clientFields[3]}
        {clientFields[6]}
        </Grid>
        <Grid item direction='column' xs={4} >
        {clientFields[1]}
        {clientFields[4]}
        {clientFields[7]}
        </Grid>
        <Grid item direction='column' xs={4}>
        {clientFields[2]}
        {clientFields[5]}
        {clientFields[8]}
        </Grid>
      </Grid>
    } else if (formType === 'risk-factors') {
      code = 
      <Grid container xs={12} style={{display: 'flex', justifyContent: 'flex-start'}}>
        {clientFields}
      </Grid>
    } else {
      code = 
      <Grid container style={{display: 'flex', justifyContent: 'flex-start'}}>
        {clientFields}
      </Grid>
    }
    

    return (
      <>
      {code}
      </>
      
      //   <Grid container style={{display: 'flex', justifyContent: 'flex-start'}}>
      //   <Grid item direction="column" style={{margin: '0 30px 0 0'}}>
      //     {clientFields.slice(0,2)}
      //   </Grid>
      //   <Grid item direction="column">
      //   {clientFields.slice(2)}
      // </Grid>
      // </Grid>

    );
  }

  render = () => {
    const {
      config
    } = this.props
    return (
      this.renderClientForm(config)
    );

  };
}

ClientForm.propTypes = {
  config: Proptypes.array
};

export default ClientForm;
