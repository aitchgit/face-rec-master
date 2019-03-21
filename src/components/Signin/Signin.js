import React from 'react';
import {
    Button,
    Container,
    Form,
    Grid
  } from 'semantic-ui-react';
  import './Signin.css';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: ''
    }
  }

  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }

  saveAuthTokenInSessions = (token) => {
    window.sessionStorage.setItem('token', token);
  }

  onSubmitSignIn = () => {
    fetch('https://damp-thicket-45544.herokuapp.com/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      .then(response => response.json())
      .then(data => {
        if (data && data.success === "true") {
          this.saveAuthTokenInSessions(data.token)
          this.props.loadUser(data.user)
          this.props.onRouteChange('home');
        }
      })
      .catch(console.log)
  }

  render() {
    const { onRouteChange } = this.props;
    return (
        <Container className="signin-container" >
        <Grid centered stackable columns={2}>        
        <Grid.Column >
        <Form className="content-column">
        <h1 className="content-column-header">Sign In</h1>
                <Form.Field>
                <label>Email</label>
                <input onChange={this.onEmailChange} style={{maxWidth: '400px'}}/>
                </Form.Field>
                <Form.Field>
                <label style={{marginTop: '2em'}}>Password</label>
                <input onChange={this.onPasswordChange} type='password' style={{maxWidth: '400px'}} />
                </Form.Field>
                <Button onClick={this.onSubmitSignIn} style={{marginTop: '2em'}} type='submit'>Submit</Button>
                <p  onClick={() => onRouteChange('register')} style={{cursor: 'pointer'}} >Register an account</p>
            </Form>
        </Grid.Column>
        <Grid.Column className="container-image">
        </Grid.Column>
        </Grid>
        </Container>
    );
  }
}

export default Signin;