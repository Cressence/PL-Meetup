import React,{ Component } from 'react';
import { Tab, Form,Button,Container, Grid,Input } from 'semantic-ui-react'

//style
import '../style/userManagement.css';

class Login extends Component{
    render(){
        //declaring tabs array
        const panes = [
        { menuItem: 'Student',render: () => <Tab.Pane>{StudentSignUp}</Tab.Pane> },
        { menuItem: 'Mentor', render: () => <Tab.Pane>{MentorSignUp}</Tab.Pane> },
        { menuItem: 'Admin', render: () => <Tab.Pane>{AdminSignUp}</Tab.Pane>  },
        ]

        return(
            <Container fluid className="signup logSize">
            <Grid columns={3} stackable='true'>
                    <Grid.Row>
                    <Grid.Column>
                    </Grid.Column>
                    <Grid.Column >
                    <h2 style={{color:'#db3236'}}>LOGIN</h2>
            <Tab panes={panes} />
             
                    </Grid.Column>
                    <Grid.Column>
                    </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        )
    }
}

//the student sign up
var StudentSignUp = React.createElement('div', {},
            <div>            
              <Form>
                <Input placeholder='Email' type='email' icon='mail' iconPosition='left' fluid /><br />
                <Input placeholder='Password' type="password" icon='lock' iconPosition='left' fluid /><br /><br />
                <Button style={{backgroundColor:'#db3236'}} type='submit' color='blue' fluid>Connect</Button>
                </Form>
            </div>
        )

        //the student sign up
var AdminSignUp = React.createElement('div', {},
            <div>
               <Form>
                <Input placeholder='Email' type='email' icon='mail' iconPosition='left' fluid /><br />
                <Input placeholder='Password' type="password" icon='lock' iconPosition='left' fluid /><br /><br />
                <Button style={{backgroundColor:'#db3236'}} type='submit' color='blue' fluid>Connect</Button>
                </Form>
            </div>
        )

        var MentorSignUp = React.createElement('div', {},
            <div>
                <Form>
                <Input placeholder='Email' type='email' icon='mail' iconPosition='left' fluid /><br />
                <Input placeholder='Password' type="password" icon='lock' iconPosition='left' fluid /><br /><br />
                <Button style={{backgroundColor:'#db3236'}} type='submit' color='blue' fluid>Connect</Button>
                </Form>
            </div>
        )

        

export default Login;  