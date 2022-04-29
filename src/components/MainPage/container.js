import {connect} from 'react-redux';
import MainPage from './mainPage';
import {loadReferralData, referralLoading} from '../../redux/actions/propertyActions';

const mapStateToProps = state => {
  return {
    property: state.property
  };
}

const mapDispatchToProps = {
  loadReferralData,
  referralLoading
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);