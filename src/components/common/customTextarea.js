import React, {Component} from 'react';
import Proptypes from 'prop-types';

class CustomTextArea extends Component {
  constructor(props) {
    super(props);
    this.textChange = this.textChange.bind(this);
  }

  textChange(e) {
    const {
      action, 
      stateVariable
    } = this.props;
    const change = e.target.value;
    action(stateVariable, change);
  }

  render = () => {
    const {
      name,
      id,
      data,
      value,
      disabled
    } = this.props;
    return (
      <textarea name={name} id={id} value={value} disabled={disabled} onChange={this.textChange}>
        {data}
      </textarea>
    );

  };
}

CustomTextArea.propTypes = {
  name: Proptypes.string,
  id: Proptypes.string,
  data: Proptypes.string
}

export default CustomTextArea;
