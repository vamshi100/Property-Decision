import {connect} from 'react-redux';
import MainPage from './mainPage';
import {calculateCumulativeRisk, loadExcelData, loadReferralData, referralLoading} from '../../redux/actions/propertyActions';

const mapStateToProps = state => {
  return {
    property: state.property
  };
}

const mapDispatchToProps = {
  calculateCumulativeRisk,
  loadExcelData,
  loadReferralData,
  referralLoading
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);