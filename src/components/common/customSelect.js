import React, {Component} from 'react';
import Proptypes from 'prop-types';

class CustomSelect extends Component {
  constructor(props) {
    super(props);
    this.optionChange = this.optionChange.bind(this);
  }

  optionChange(e) {
    const {
      action, 
      stateVariable
    } = this.props;
    const {
      section
    } = this.props;
    let val;
    val = e.target.value;
    if (section === 'policyLimits') {
      val = e.target.value.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
    }
    action(stateVariable, val);
  }
  renderOptions(list) {
    const optionsList = list.map((item, idx) => {
        return (
        <option value={item} key={idx} id={item} >{item}</option>
        );
    });
    return optionsList;
  }

  render = () => {

    const {
      name,
      id,
      list,
      value,
      disabled
    } = this.props;
    return (
      <select id={id} name={name} value={value} disabled={disabled} onChange={this.optionChange}>
        {this.renderOptions(list)}
      </select>
    );

  };
}

CustomSelect.propTypes = {
  name: Proptypes.string,
  id: Proptypes.string,
  list: Proptypes.array

}

export default CustomSelect;
