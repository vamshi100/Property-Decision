import React from 'react';

// MUI Components
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


export default function MainPageFooter(){
    return(
        <Grid item className='main-page-footer' xs={12}>
            <Typography  variant="caption" display="block" sx={{ fontSize: 12, ml: 1}}>
                    Copyright © 2022 HCL Technologies Limited
            </Typography>
        </Grid>
    );
};