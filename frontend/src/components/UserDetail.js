import React, { Component } from 'react'
import { TextField,Button } from '@mui/material';
import './home.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
export class UserDetail extends Component {
    continue=e=>{
        e.preventDefault();
        this.props.nextSection();
    }
  render() {
    const {values,handleChange} = this.props;
    return (
      <div className='userdetail'>
          <React.Fragment>
          <TextField
          required
          id="outlined-required"
          label="Given Name"
          variant="filled" 
          defaultValue="Hello World"
          onChange={handleChange('givenName')}
          defaultValue={values.givenName}
          fullWidth
        /><br/>
        <TextField
          required
          id="outlined-required"
          label="Age"
          variant="filled"
          onChange={handleChange('age')}
          defaultValue={values.age}
        /><br/>
        <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={values.gender}
        onChange={handleChange('gender')}
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl><br/>
    <TextField
          required
          id="outlined-required"
          label="Country"
          variant="filled"
          onChange={handleChange('country')}
          defaultValue={values.country}
        /><br/>
        <Button onClick={this.continue}>Continue</Button>
          </React.Fragment>
      </div>
    )
  }
}

export default UserDetail