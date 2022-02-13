import React, { Component } from 'react'
import { Button } from '@mui/material';
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
    const check=e=>{
      if((values.work_interfere==null)||(values.family_history===null)||(values.benefits===null)||(values.remote_work===null)||(values.tech_company===null)){
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
          <div style={{width:'100%',color:'#054f99',padding:"1%",fontWeight:"bold"}}><h3 align='left'>2/5</h3></div>
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">If you have a mental health condition, do you feel that it interferes with your work ?</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={values.work_interfere}
        onChange={handleChange('work_interfere')}
      >
       <FormControlLabel value={3} control={<Radio />} label="Often" />
        <FormControlLabel value={2} control={<Radio />} label="Sometimes" />
        <FormControlLabel value={1} control={<Radio />} label="Rarely" />
        <FormControlLabel value={0} control={<Radio />} label="Never" />
      </RadioGroup>
    </FormControl>
     <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Do you have a family history of mental illness ?</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={values.family_history}
        onChange={handleChange('family_history')}
      >
        <FormControlLabel value={1} control={<Radio />} label="Yes" />
        <FormControlLabel value={0} control={<Radio />} label="No" />
      </RadioGroup>
    </FormControl>
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Do you work remotely (outside of an office) at least 50% of the time?</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={values.remote_work}
        onChange={handleChange('remote_work')}
      >
        <FormControlLabel value={1} control={<Radio />} label="Yes" />
        <FormControlLabel value={0} control={<Radio />} label="No" />
      </RadioGroup>
    </FormControl>
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Is your employer primarily a tech company/organization ?</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={values.tech_company}
        onChange={handleChange('tech_company')}
      >
       <FormControlLabel value={1} control={<Radio />} label="Yes" />
        <FormControlLabel value={0} control={<Radio />} label="No" />
      </RadioGroup>
    </FormControl>
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Does your employer provide mental health benefits?</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={values.benefits}
        onChange={handleChange('benefits')}
      >
          <FormControlLabel value={1} control={<Radio />} label="Yes" />
        <FormControlLabel value={0} control={<Radio />} label="No" />
        <FormControlLabel value={2} control={<Radio />} label="Don't Know" />
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

export default DepDetail