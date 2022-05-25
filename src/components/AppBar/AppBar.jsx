import React from "react";
import { Link } from 'react-router-dom';
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

    const {appBar, property} = props;

  return (
    <Grid item className={`${appBar}`} >
      <Link to='/'>
      <img
        src={hclLogo}
        height="100px"
        width="100px"
        className="mainPageLogo"
      />
      </Link>

      <Grid item className="global-search">
        <GlobalSearch data={property.referralData} {...props} />
      </Grid>

      <Grid item className="profile">
        <Avatar alt="UU" src={profile_pic} />
      </Grid>

    </Grid>
  );
}

const themedAppBar = withTheme(AppBar);

export default themedAppBar;
