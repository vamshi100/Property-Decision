import Proptypes from 'prop-types';
import React, {Component} from 'react';
import CustomInput from './customInput';
import CustomLabel from './customLabel';
import CustomTextArea from './customTextarea';
import CustomSelect from './customSelect';


class ClientForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      policyNumber: ''
    };
  }
  
  renderClientForm(config) {
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
              />
            </div >
        )
      }

      return inputField;

    });
    return (
        clientFields
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
