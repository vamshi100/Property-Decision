import React from "react";
import hclLogo from "../../logo.png";
import profile_pic from "../../images/profile_pic.png";

// CSS
import './AppBar.css'

// MUI Components
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import { withTheme } from '@mui/styles';

// Components
import GlobalSearch from '../SearchBar/GlobalSearch';

function AppBar(props) {

    const {property} = props;

  return (
    <Grid item className="appbar home-appbar">
      <img
        src={hclLogo}
        height="100px"
        width="100px"
        className="mainPageLogo"
      />

      <Grid item className="global-search">
        <GlobalSearch data={property.referralData} />
      </Grid>

      <Grid item className="profile">
        <Avatar alt="UU" src={profile_pic} />
      </Grid>

      {/* <label htmlFor="policy number">Policy Number</label>
            <input name="policy number" type="text" onChange={this.policyNumber} />

            <Link to={`/policy-page/${policyNumber}`}>
              <button>View</button>
            </Link> */}
    </Grid>
  );
}

const themedAppBar = withTheme(AppBar);

export default themedAppBar;
