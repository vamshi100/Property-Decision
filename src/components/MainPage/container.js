import {connect} from 'react-redux';
import MainPage from './mainPage';
// import {loadExcelData, loading} from './redux/actions/propertyActions';

const mapStateToProps = state => {
  return {
    property: state.property,
    loading: state.property.loading
  };
}

const mapDispatchToProps = {
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);