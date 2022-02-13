import React, { Component } from 'react'
import {Button } from '@mui/material';
import './home.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
export class DepDetail3 extends Component {
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
    const check=e=>{
      if((values.treatment==null)||(values.mental_health_interview===null)||(values.phys_health_interview===null)||(values.obs_consequence===null)||(values.mental_vs_physical===null)){
        alert("All The Field Are Mandatory")
      }
      else{
        this.continue(e);
      }
    }
    return (
      <div className='stylings'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
<path fill="#05386b" fill-opacity="1" d="M0,32L48,48C96,64,192,96,288,96C384,96,480,64,576,64C672,64,768,96,864,101.3C960,107,1056,85,1152,101.3C1248,117,1344,171,1392,197.3L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
</svg>
      <div className='userdetail'>
          <React.Fragment>
          <div style={{width:'100%',color:'#054f99',padding:"1%",fontWeight:"bold"}}><h3 align='left'>5/5</h3></div>
          <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Would you bring up a mental health issue with a potential employer in an interview?</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={values.mental_health_interview}
        onChange={handleChange('mental_health_interview')}
      >
          <FormControlLabel value={1} control={<Radio />} label="Yes" />
        <FormControlLabel value={0} control={<Radio />} label="No" />
        <FormControlLabel value={2} control={<Radio />} label="May Be" />
      </RadioGroup>
    </FormControl>
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Would you bring up a physical health issue with a potential employer in an interview?</FormLabel>
    <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={values.phys_health_interview}
        onChange={handleChange('phys_health_interview')}
      >
          <FormControlLabel value={1} control={<Radio />} label="Yes" />
        <FormControlLabel value={0} control={<Radio />} label="No" />
        <FormControlLabel value={2} control={<Radio />} label="May Be" />
      </RadioGroup>
    </FormControl>
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Do you feel that your employer takes mental health as seriously as physical health?</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={values.mental_vs_physical}
        onChange={handleChange('mental_vs_physical')}
      >
          <FormControlLabel value={1} control={<Radio />} label="Yes" />
        <FormControlLabel value={0} control={<Radio />} label="No" />
        <FormControlLabel value={2} control={<Radio />} label="Don't Know" />
      </RadioGroup>
    </FormControl>
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Have you heard of or observed negative consequences for coworkers with mental health conditions in your</FormLabel>
    <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={values.obs_consequence}
        onChange={handleChange('obs_consequence')}
      >
          <FormControlLabel value={1} control={<Radio />} label="Yes" />
        <FormControlLabel value={0} control={<Radio />} label="No" />
      </RadioGroup>
    </FormControl>
    
     <div style={{width:'100%'}}>
     <Button onClick={check}>Continue</Button>
        <Button className='rightBtn' onClick={this.back}>Back</Button>
     </div>
          </React.Fragment>
      </div>
      </div>
    )
  }
}

export default DepDetail3