import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import ClientInformation from '../ClientInfo/clientInformation';
import * as XLSX from "xlsx";
import PolicyRiskScore from '../RiskScore/riskScore';
import OtherActivePolicies from '../OtherPolicies/otherPolicies.js';
import PropertyCharacteristics from '../PropertyCharacteristics/propertyCharacteristics';
import RiskFactors from '../RiskFactors/riskFactors';
import RiskManagement from '../RiskManagement/riskManagement';
import UnderwritingComments from '../UnderwritingComments/underwritingComments';
import Footer from '../Footer/footer';
import PolicyLimits from '../PolicyLimits/policyLimits';
import input from '../../inputData/input.xlsx';
import input1 from '../../inputData/input1.xlsx';
import hclLogo from '../../inputData/HCL_Logo.svg';
import './policyPage.css'

class PolicyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      policyNumber: ''
    };
    this.filterPolicy = this.filterPolicy.bind(this);
    this.policyNumber = this.policyNumber.bind(this);
  }

  componentDidMount() {
    const {
      loadExcelData,
      loading,
      match
    } = this.props;
    const policyId = match.params.id;
    loading(true);
    fetch(input).then(res => {
      return res.arrayBuffer();
    }).then(res => {
      let wb = XLSX.read(new Uint8Array(res), {
        type: 'array'
      });
      wb.SheetNames.forEach(sheet => {
        let rawObj = XLSX.utils.sheet_to_row_object_array(wb.Sheets[sheet]);
        loadExcelData(rawObj, policyId);
      });
    });
  }

  filterPolicy() {
    const {
      policyNumber
    } = this.state;
    <Link to={`/policy-page/${policyNumber}`} />
  }

  policyNumber(e) {
    this.setState({
      policyNumber: e.target.value
    });
  }

  render() {
    const {
      property,
      updatePolicy
    } = this.props;
    if (property.loading) {
      return (
        <div className="home">
          <div className="load-text">
            Loading, Please Wait.
          </div>
        </div>
      );
    }
    return (
      <div className="policy">
        <img src={hclLogo} height="100px" width="100px" />
        <h1>
          Property Underwriting Decision Support
        </h1>
        <div className="container">
          <div className="clientInformation-container">
            <ClientInformation property={property} updatePolicy={updatePolicy} />
            <PolicyRiskScore property={property} />
            <OtherActivePolicies property={property} />
          </div>
          <div className="policy-limits-container">
            <PolicyLimits property={property} updatePolicy={updatePolicy} />
          </div>
          <div className="property-characteristics-container">
            <PropertyCharacteristics property={property} updatePolicy={updatePolicy} />
          </div>
          <div className="property-characteristics-container">
            <RiskFactors property={property} updatePolicy={updatePolicy} />
          </div>
          <div className="property-characteristics-container risk-management">
            <RiskManagement property={property} updatePolicy={updatePolicy} />
          </div>
          <div className="property-characteristics-container underwriting">
            <UnderwritingComments property={property} updatePolicy={updatePolicy} />
          </div>
          <div className="property-characteristics-container footer-container">
            <Footer />
          </div>
        </div>
      </div>
    );

  };
}

PolicyPage.defaultProps = {
  loading: false
}
export default PolicyPage;
