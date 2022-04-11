import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import hclLogo from '../../inputData/HCL_Logo.svg';
import './mainPage.css'

class MainPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      policyNumber: ''
    };
    this.policyNumber = this.policyNumber.bind(this);
  }

  policyNumber(e) {
    this.setState({
      policyNumber: e.target.value
    });
  }

  render() {
    
    const {
      policyNumber
    } = this.state;
    return (
      <div className="home">
        <img src={hclLogo} height="100px" width="100px" className="mainPageLogo"/>
        <label htmlFor="policy number">Policy Number</label>
        <input name="policy number" type="text" onChange={this.policyNumber}/>
        
      <Link to={`/policy-page/${policyNumber}`}>
        <button>View</button></Link>
      </div>
    );

  };
}

export default MainPage;
