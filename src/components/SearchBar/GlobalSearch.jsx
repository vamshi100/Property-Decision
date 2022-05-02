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
    const [state, setState] = React.useState({
      autocompleteLabel: 'Enter a policy number...',
      policyNumber:''
    });
    const history = useHistory();
  return (
    <Stack spacing={2} sx={{ width: 350 }}>
      <Autocomplete
        clearOnBlur
        freeSolo
        fullWidth
        id="free-solo-2-demo"
        loading={data.length ? false : true}
        disableClearable
        onBlur={() => setState({autocompleteLabel: 'Enter a policy number...'})}
        onChange={(event) => {
          if(event.type === 'click'){
            history.push({
              pathname: `policy-page/${event.target.textContent}` 
          })
          }
      }}
        onFocus={() => setState({autocompleteLabel: ''})}
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
            label={state.autocompleteLabel}
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

