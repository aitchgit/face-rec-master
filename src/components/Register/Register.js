import React from 'react';
import {
    Button,
    Container,
    Form,
    Grid
  } from 'semantic-ui-react';
import './Register.css';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: ''
    }
  }

  onNameChange = (event) => {
    this.setState({name: event.target.value})
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }

  onRegisterSubmit = () => {
    fetch('https://damp-thicket-45544.herokuapp.com/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user)
          this.props.onRouteChange('home');
        }
      })
  }

  render() {
    const { onRouteChange } = this.props;
    return (
        <Container className="signin-container" >
        <Grid centered stackable columns={2}>        
        <Grid.Column >
        <Form className="content-column">
        <h1 className="content-column-header">Register</h1>
                <Form.Field>
                <label>Name</label>
                <input type='text' name='name' id='name' onChange={this.onNameChange} style={{maxWidth: '400px'}}/>
                </Form.Field>
                <Form.Field>
                <label style={{marginTop: '2em'}}>Email</label>
                <input type='text' name='email' id='email' onChange={this.onEmailChange} style={{maxWidth: '400px'}} />
                </Form.Field>
                <Form.Field>
                <label style={{marginTop: '2em'}}>Password</label>
                <input type='password' name='password' id='password' onChange={this.onPasswordChange} style={{maxWidth: '400px'}} />
                </Form.Field>
                <Button onClick={this.onRegisterSubmit} style={{marginTop: '2em'}} type='submit'>Submit</Button>
                <p  onClick={() => onRouteChange('signin')} style={{cursor: 'pointer'}} >Have an account?</p>
            </Form>
        </Grid.Column>
        <Grid.Column className="container-image">
        </Grid.Column>
        </Grid>
        </Container>
    );
  }
}

export default Register;