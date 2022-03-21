import React, {Component} from 'react';
import Proptypes from 'prop-types';

import './footer.css'

class Footer extends Component {


  render = () => {
    return (
      <div className="footer">
        <div className="footer-left">
          <button className="back-btn">Back</button>
        </div>
        <div className="footer-right">
          <button className="Submit-btn">Submit</button>
          <button className="Save-btn">Save</button>
          <button className="Cancel-btn">Cancel</button>
        </div>
      </div>
    );

  };
}


export default Footer;
