import * as React from 'react';
import {
    useHistory,
} from "react-router-dom";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

// CSS
import '../AppBar/AppBar.css';

export default function GlobalSearch(props) {
    const {data} = props;
    const [state, setState] = React.useState({});
    const history = useHistory();
  return (
    <Stack spacing={2} sx={{ width: 350 }}>
      {/* <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => <TextField {...params} label="freeSolo" />}
      /> */}
      <Autocomplete
        freeSolo
        fullWidth
        id="free-solo-2-demo"
        disableClearable
        onChange={state.policyNumber ? history.push({
            pathname: `policy-page/${state.policyNumber}` 
        }) : ''}
        onInputChange={(_event, value) => {
            
            if(value){
              setState(
                {policyNumber: value}
                )
            }
            
        }}
        options={data.map((policy) => policy.policyId)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Enter a policy number..."
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
            size='small'
          />
        )}
      />
    </Stack>
  );
}

