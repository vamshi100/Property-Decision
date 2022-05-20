import {connect} from 'react-redux';
import PolicyPage from './policyPage';
import {calculateCumulativeRisk, calculateRiskScore, loadAllCumRiskScores, loadExcelData, loading, updatePolicy} from '../../redux/actions/propertyActions';

const mapStateToProps = state => {
  return {
    property: state.property
  };
}

const mapDispatchToProps = {
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