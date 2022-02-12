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
    const {values: { givenName,age,gender,country,selfEmployed,noEmployees,mentalIllnessHistory,treatmentTaken,mentalHealthInterefereWork }} = this.props;
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
                <ListItemText primary="Gender" secondary={gender} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Country" secondary={country} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Are You Employed ?" secondary={selfEmployed} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Do you have a family history of mental illness ?" secondary={mentalIllnessHistory} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Have you sought treatment for a mental health condition?" secondary={treatmentTaken} />
              </ListItem>
              <ListItem>
                <ListItemText primary="If you have a mental health condition, do you feel that it interferes with your work ?" secondary={mentalHealthInterefereWork} />
              </ListItem>
            </List>
            <div style={{width:'100%'}}>
     <Button className='submitBtn' onClick={this.continue}>Submit</Button>
        <Button className='rightBtn' onClick={this.back}>Back</Button>
     </div>
      </div>
    )
  }
}

export default Confirm