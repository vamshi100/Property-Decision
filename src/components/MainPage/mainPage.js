import React, { useEffect, useState } from 'react';
import {
  useHistory,
} from "react-router-dom";
import { Link } from 'react-router-dom';
import './mainPage.css'

// Data
import * as XLSX from "xlsx";
import policyData from '../../inputData/policyData.xlsx';

// MUI imports
import Grid from '@mui/material/Grid';
import { DataGrid } from '@mui/x-data-grid';
import { withTheme } from '@mui/styles';

// Components
import AppBar from '../AppBar/AppBar';
import MainPageFooter from './MainPageFooter';




function MainPage(props) {

    const {loadReferralData, property, referralLoading} = props;

    const [state, setState] = useState({
      policyNumber: ''
    });
    

  

  function policyNumber(e) {
    setState({
      policyNumber: e.target.value
    });
  };

  useEffect(()=> {
    if(!property.referralDataIsLoading){
      referralLoading(true);
    } else {
      referralLoading(false);
    };

    fetch(policyData).then(res => {
      return res.arrayBuffer();
    }).then(res => {
      let wb = XLSX.read(new Uint8Array(res), {
        type: 'array'
      });
      wb.SheetNames.forEach(sheet => {
        let rawObj = XLSX.utils.sheet_to_row_object_array(wb.Sheets[sheet]);
        loadReferralData(rawObj.slice(0, 100));
      });
    });
  }, []);

  useEffect(()=>{
    if(property.referralData.length){
      referralLoading(false);
    };
  }, [property.referralData]);


    // Data Grid Columns & Rows
    const columns = [
      {
        field: 'submissionID',
        headerName: 'Submission Number',
        width: 175,
        type: 'string'
      },
      {
        field: 'policyId',
        headerName: 'Policy Number',
        width: 175,
        editable: false,
      },
      {
        field: 'effectiveDate',
        headerName: 'Policy Effective Date',
        width: 175,
        editable: false,
        sortable: true,
      },
      {
        field: 'dateReferred',
        headerName: 'Date Referred',
        type: 'number',
        width: 150,
        editable: true,
      },
      {
        field: 'daysPendingReview',
        headerName: 'Days Pending Review',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 175,
      },
      {
        field: 'status',
        headerName: 'Status',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 175,
      },
    ];

    const history = useHistory();
    const rows = property.referralData;

    let policyNumbers = [];

    if(property.referralData.length){
      property.referralData.forEach(policy => {
        policyNumbers.push(policy.policyId);
      })
    }

    

    // } else {
    return (
      <Grid container className="home" >

        <AppBar {...props} />

        <Grid item xs={10} style={{ border: 'solid #000 1px', height: 400, width: '70%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            hideFooter
            loading={property.referralDataIsLoading}
            onCellClick={(event) => {
              if(policyNumbers.includes(event.value)){
                history.push(`policy-page/${event.value}`)
              }
            }}
            pageSize={10}
            rowsPerPageOptions={[3]}
          // disableSelectionOnClick
          />
        </Grid>

        <MainPageFooter />

      </Grid>
    );

};


const themeMainPage = withTheme(MainPage);

export default themeMainPage;
