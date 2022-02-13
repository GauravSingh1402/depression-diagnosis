import React, { Component } from 'react'
import { List, ListItem, ListItemText, Button} from '@mui/material';
export class Confirm extends Component {
    continue=e=>{
        e.preventDefault();
        this.props.nextSection();
    }
    back=e=>{
        e.preventDefault();
        this.props.prevSection();
    }
    
  render() {
    const {values:{ givenName,age,gender,self_employed,family_history, work_interfere,remote_work,tech_company,benefits,care_options, wellness_program,seek_help,anonymity,leave,mental_health_consequence,
    phys_health_consequence,coworkers,supervisor,mental_health_interview,
    phys_health_interview,mental_vs_physical,obs_consequence,treatment}}=
    this.props;
    const submit=e=>{
      e.preventDefault();
      console.log(this.props);
      if([givenName,age,gender,self_employed,family_history, work_interfere,remote_work,tech_company,benefits,care_options, wellness_program,seek_help,anonymity,leave,mental_health_consequence,
        phys_health_consequence,coworkers,supervisor,mental_health_interview,
        phys_health_interview,mental_vs_physical,obs_consequence,treatment].some(el=>el=>null)){
          alert("All The Field Are Mandatory")
        }
      else{
        fetch('/postSurveyData', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            givenName: givenName,
            age: age,
            gender:gender,
            self_employed:self_employed,
            family_history:family_history,
            work_interfere: work_interfere,
            remote_work:remote_work,
            tech_company:tech_company,
            benefits:benefits,
            care_options:care_options,
            wellness_program:wellness_program,
            seek_help:seek_help,
            anonymity:anonymity,
            leave:leave,
            mental_health_consequence:mental_health_consequence,
            phys_health_consequence:phys_health_consequence,
            coworkers:coworkers,
            supervisor:supervisor,
            mental_health_interview:mental_health_interview,
            phys_health_interview:phys_health_interview,
            mental_vs_physical:mental_vs_physical,
            obs_consequence:obs_consequence,
            treatment:treatment
          })
        }).then(response => response.json())
        .then(json => {
          const sd = json.msg;
          console.log(sd)
        })
        .catch(error => {
          console.log(error)
        });
      }
      }
    return (
      <div className='userdetails'>
          <List>
              <ListItem>
                <ListItemText primary="Given Name" secondary={givenName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Age" secondary={age} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Gender" secondary={gender === '0' ? ("Female") : gender === '1'? ("Male"): gender === '2'?("Other"):("")} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Are you self-employed ?" secondary={self_employed === '0' ? ("No"): self_employed === '1'?("Yes"):("")} />
              </ListItem>
              <ListItem>
                <ListItemText primary="If you have a mental health condition, do you feel that it interferes with your work ?" secondary={work_interfere === '0' ? ("Never") : work_interfere === '1'? ("Rarely"): work_interfere === '2'? ("Sometimes"): work_interfere==='3'?("Often"):("")} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Do you have a family history of mental illness ?" secondary={family_history === '0' ? ("No"): family_history==='1'?("Yes"):("")} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Do you work remotely (outside of an office) at least 50% of the time?" secondary={remote_work === '0' ? ("No"): remote_work==='1'?("Yes"):("")} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Is your employer primarily a tech company/organization ?" secondary={tech_company === '0' ? ("No"):tech_company==='1'?("Yes"):("")} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Does your employer provide mental health benefits?" secondary={benefits === '0' ? ("No") : benefits === '1'? ("Yes"): benefits==='2'?"Don't Know":("")} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Do you know the options for mental health care your employer provides?" secondary={care_options === '0' ? ("No") : care_options === '1'? ("Yes"): care_options==='2'?("Not Sure"):("")} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Has your employer ever discussed mental health as part of an employee wellness program?" secondary={wellness_program === '0' ? ("No") : wellness_program === '1'? ("Yes"): wellness_program==='2'?("Don't Know"):("")} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Does your employer provide resources to learn more about mental health issues and how to seek help?" secondary={seek_help === '0' ? ("No") : seek_help === '1'? ("Yes"): seek_help==='2'?("Don't Know"):("")} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Is your anonymity protected if you choose to take advantage of mental health or substance abuse treatment" secondary={anonymity === '0' ? ("No") : anonymity === '1'? ("Yes"): anonymity==='2'?("Don't Know"):("")} />
              </ListItem>
              <ListItem>
                <ListItemText primary="How easy is it for you to take medical leave for a mental health condition?" secondary={leave === '0' ? ("SomeWhat Dificult") : leave === '1'? ("SomeWhat Easy"): leave==='2'?("Don't Know"):("")} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Do you think that discussing a mental health issue with your employer would have negative consequences?" secondary={mental_health_consequence === '0' ? ("No") : mental_health_consequence === '1'? ("Yes"): mental_health_consequence==='2'?("Maybe"):("")} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Do you think that discussing a physical health issue with your employer would have negative consequences?" secondary={phys_health_consequence === '0' ? ("No") : phys_health_consequence === '1'? ("Yes"): phys_health_consequence==='2'?("Maybe"):("")} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Would you be willing to discuss a mental health issue with your coworkers?" secondary={coworkers === '0' ? ("No") : coworkers === '1'? ("Yes"): coworkers==='2'?("Some Of Them"):("")} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Would you be willing to discuss a mental health issue with your direct supervisor(s)?" secondary={supervisor === '0' ? ("No") : supervisor === '1'? ("Yes"): supervisor==='2'?("Some Of Them"):("")} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Would you bring up a mental health issue with a potential employer in an interview?" secondary={mental_health_interview === '0' ? ("No") : mental_health_interview === '1'? ("Yes"): mental_health_interview==='2'?("Maybe"):("")} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Would you bring up a physical health issue with a potential employer in an interview?" secondary={phys_health_interview === '0' ? ("No") : phys_health_interview === '1'? ("Yes"): phys_health_interview==='2'?("Maybe"):("")} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Do you feel that your employer takes mental health as seriously as physical health?" secondary={mental_vs_physical === '0' ? ("No") : mental_vs_physical === '1'? ("Yes"): mental_vs_physical==='2'?("Don't Know"):("")} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Have you heard of or observed negative consequences for coworkers with mental health conditions in your" secondary={obs_consequence === '0' ? ("No"): obs_consequence === '1' ?("Yes"):("")} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Have you sought treatment for a mental health condition?" secondary={treatment === '0' ? ("No"): treatment === '1' ? ("Yes"):("")} />
              </ListItem>
            </List>
            <div style={{width:'100%'}}>
     <Button className='submitBtn' onClick={submit}>Submit</Button>
        <Button className='rightBtn' onClick={this.back}>Back</Button>
     </div>
      </div>
    )
  }
}

export default Confirm