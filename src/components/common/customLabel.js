import React, {Component} from 'react';
import Proptypes from 'prop-types';

class CustomLabel extends Component {

  render = () => {
    const {
      htmlFor,
      label
    } = this.props;
    if (!label) {
      return null;
    }
    return (
      <label htmlFor={htmlFor}>{label}</label>
    );

  };
}

CustomLabel.propTypes = {
  htmlFor: Proptypes.string,
  label: Proptypes.string
}

export default CustomLabel;
