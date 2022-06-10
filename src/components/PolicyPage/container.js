import {connect} from 'react-redux';
import PolicyPage from './policyPage';
import {calculateCovARisk, calculateCumulativeRisk, calculateRiskScore, loadAllCumRiskScores, loadExcelData, loading, updatePolicy} from '../../redux/actions/propertyActions';

const mapStateToProps = state => {
  return {
    property: state.property
  };
}

const mapDispatchToProps = {
  calculateCovARisk,
  calculateCumulativeRisk,
  calculateRiskScore,
  loadAllCumRiskScores,
  loadExcelData,
  loading,
  updatePolicy
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PolicyPage);