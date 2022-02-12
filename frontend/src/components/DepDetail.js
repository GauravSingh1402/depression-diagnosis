import React, { Component } from 'react'
import { TextField,Button } from '@mui/material';
import './home.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
export class DepDetail extends Component {
    continue=e=>{
        e.preventDefault();
        this.props.nextSection();
    }
    back=e=>{
        e.preventDefault();
        this.props.prevSection();
    }
  render() {
    const {values,handleChange} = this.props;
    return (
      <div className='userdetail'>
          <React.Fragment>
          <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Are you self-employed ?</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={values.selfEmployed}
        onChange={handleChange('selfEmployed')}
      >
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="No" control={<Radio />} label="No" />
      </RadioGroup>
    </FormControl>
          <TextField
          required
          id="outlined-required"
          label="No.Of Employees in Your Organization"
          variant="filled"
          onChange={handleChange('noEmployees')}
          defaultValue={values.noEmployees}
          fullWidth
        /><br/>
            <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Do you have a family history of mental illness ?</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={values.mentalIllnessHistory}
        onChange={handleChange('mentalIllnessHistory')}
      >
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="No" control={<Radio />} label="No" />
      </RadioGroup>
    </FormControl><br/>
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Have you sought treatment for a mental health condition?</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={values.treatmentTaken}
        onChange={handleChange('treatmentTaken')}
      >
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="No" control={<Radio />} label="No" />
      </RadioGroup>
    </FormControl><br/>
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">If you have a mental health condition, do you feel that it interferes with your work ?</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={values.mentalHealthInterefereWork}
        onChange={handleChange('mentalHealthInterefereWork')}
      >
        <FormControlLabel value="Often" control={<Radio />} label="Often" />
        <FormControlLabel value="Sometimes" control={<Radio />} label="Sometimes" />
        <FormControlLabel value="Rarely" control={<Radio />} label="Rarely" />
        <FormControlLabel value="Never" control={<Radio />} label="Never" />
      </RadioGroup>
    </FormControl>
     <div style={{width:'100%'}}>
     <Button onClick={this.continue}>Continue</Button>
        <Button className='rightBtn' onClick={this.back}>Back</Button>
     </div>
          </React.Fragment>
      </div>
    )
  }
}

export default DepDetail