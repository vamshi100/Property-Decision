import {connect} from 'react-redux';
import App from './App';
import {loadExcelData, loading} from './redux/actions/propertyActions';

const mapStateToProps = state => {
  return {
    property: state.property
  };
}

const mapDispatchToProps = {
    loadExcelData,
    loading
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);