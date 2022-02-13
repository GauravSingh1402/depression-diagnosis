import React, { Component } from 'react'
import {Button } from '@mui/material';
import './home.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
export class DepDetail2 extends Component {
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
      <div className='stylings'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
<path fill="#05386b" fill-opacity="1" d="M0,32L48,48C96,64,192,96,288,96C384,96,480,64,576,64C672,64,768,96,864,101.3C960,107,1056,85,1152,101.3C1248,117,1344,171,1392,197.3L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
</svg>
      <div className='userdetail'>
          <React.Fragment>
          <div style={{width:'100%',color:'#054f99',padding:"1%",fontWeight:"bold"}}><h3 align='left'>4/5</h3></div>
      <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">How easy is it for you to take medical leave for a mental health condition?</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={values.leave}
        onChange={handleChange('leave')}
      >
          <FormControlLabel value={1} control={<Radio />} label="SomeWhat Easy" />
        <FormControlLabel value={0} control={<Radio />} label="SomeWhat Difficult" />
        <FormControlLabel value={2} control={<Radio />} label="Don't Know" />
      </RadioGroup>
    </FormControl>
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Do you think that discussing a mental health issue with your employer would have negative consequences?</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={values.mental_health_consequence}
        onChange={handleChange('mental_health_consequence')}
      >
          <FormControlLabel value={1} control={<Radio />} label="Yes" />
        <FormControlLabel value={0} control={<Radio />} label="No" />
        <FormControlLabel value={2} control={<Radio />} label="Maybe" />
      </RadioGroup>
    </FormControl>
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Do you think that discussing a physical health issue with your employer would have negative consequences?</FormLabel>
    <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={values.phys_health_consequence}
        onChange={handleChange('phys_health_consequence')}
      >
          <FormControlLabel value={1} control={<Radio />} label="Yes" />
        <FormControlLabel value={0} control={<Radio />} label="No" />
        <FormControlLabel value={2} control={<Radio />} label="Maybe" />
      </RadioGroup>
    </FormControl>
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Would you be willing to discuss a mental health issue with your coworkers?</FormLabel>
    <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={values.coworkers}
        onChange={handleChange('coworkers')}
      >
          <FormControlLabel value={1} control={<Radio />} label="Yes" />
        <FormControlLabel value={0} control={<Radio />} label="No" />
        <FormControlLabel value={2} control={<Radio />} label="Some Of Them" />
      </RadioGroup>
    </FormControl>
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Would you be willing to discuss a mental health issue with your direct supervisor(s)?</FormLabel>
    <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={values.supervisor}
        onChange={handleChange('supervisor')}
      >
          <FormControlLabel value={1} control={<Radio />} label="Yes" />
        <FormControlLabel value={0} control={<Radio />} label="No" />
        <FormControlLabel value={2} control={<Radio />} label="Some Of Them" />
      </RadioGroup>
    </FormControl>
     <div style={{width:'100%'}}>
     <Button onClick={this.continue}>Continue</Button>
        <Button className='rightBtn' onClick={this.back}>Back</Button>
     </div>
          </React.Fragment>
      </div>
      </div>
    )
  }
}

export default DepDetail2