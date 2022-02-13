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
    const check=e=>{
      e.preventDefault();
      console.log(values.givenName);
      if(values.givenName===null){
        alert("Please Enter Name")
      }
      else if(values.age===null){
        alert("Please Enter Age")
      }
      else if(values.gender===null){
        alert("Please Select Gender")
      }
      else if(values.self_employed===null){
        alert("All The Fields are Mandatory")
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
      
          <React.Fragment>
          <form className='userdetail'>
          <div style={{width:'100%',color:'#054f99',padding:"1%",fontWeight:"bold"}}><h3 align='left'>1/5</h3></div>
         <TextField
          required
          id="outlined-required"
          label="Given Name"
          variant="filled"
          onChange={handleChange('givenName')}
          defaultValue={values.givenName}
          fullWidth
        /><br/>
        <TextField
          required
          type="number"
          id="outlined-required"
          label="Age"
          variant="filled"
          onChange={handleChange('age')}
          defaultValue={values.age}
        /><br/>
          <FormControl required>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={values.gender}
        onChange={handleChange('gender')}
      >
        <FormControlLabel value={0} control={<Radio />} label="Female" />
        <FormControlLabel value={1} control={<Radio />} label="Male" />
        <FormControlLabel value={2} control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
    <br/>
    <FormControl required>
      <FormLabel id="demo-row-radio-buttons-group-label">Are you self-employed ?</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={values.self_employed}
        onChange={handleChange('self_employed')}
      >
        <FormControlLabel value={1} control={<Radio />} label="Yes" />
        <FormControlLabel value={0} control={<Radio />} label="No" />
      </RadioGroup>
    </FormControl>
    <br/>
    <div style={{width:'100%'}}>
        <Button onClick={check}>Continue</Button>
      </div>
      
      </form>
          </React.Fragment>
          
      </div>
    )
  }
}

export default UserDetail