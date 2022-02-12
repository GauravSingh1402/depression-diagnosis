import React, { Component } from 'react'
import UserDetail from './UserDetail';
import DepDetail from './DepDetail';
import Confirm from './Confirm';
export class Survey extends Component {
  state={
      step: 1,
      givenName:'',
      age:'',
      gender:'',
      country:'',
      selfEmployed:'',
      noEmployees:'',
      mentalIllnessHistory:'',
      treatmentTaken:'',
      mentalHealthInterefereWork:''
  }
  nextSection=()=>{
      const{step}=this.state;
      this.setState({
          step:step+1
      });
  }
  prevSection=()=>{
    const{step}=this.state;
    this.setState({
        step:step-1
    }); 
  }
  handleChange=input=>e=>{
      this.setState({[input]:e.target.value});
  }
  render() {
      const{ step }=this.state;
      const{ givenName,age,gender,country,selfEmployed,noEmployees,mentalIllnessHistory,treatmentTaken,mentalHealthInterefereWork } = this.state;
      const values = { givenName,age,gender,country,selfEmployed,noEmployees,mentalIllnessHistory,treatmentTaken,mentalHealthInterefereWork }
   switch(step){
       case 1:
           return(
               <UserDetail nextSection={this.nextSection} handleChange={this.handleChange} values={values}></UserDetail>
           )
       case 2:
           return(
            <DepDetail nextSection={this.nextSection} 
            prevSection={this.prevSection} handleChange={this.handleChange} values={values}></DepDetail>
           )
        case 3:
            return(
                <Confirm nextSection={this.nextSection} 
                prevSection={this.prevSection} handleChange={this.handleChange} values={values}></Confirm>
            )
       case 4:
           return(
               <div>Success</div>
           )
           default:
            (console.log('This is a multi-step form built with React.'))
   }
  }
}

export default Survey