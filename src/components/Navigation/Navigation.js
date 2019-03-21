import React from 'react';
import {
    Container,
    Image,
    Menu
  } from 'semantic-ui-react';
import logo from './logo.svg';
import './Navigation.css';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
        return (
            <Menu borderless size='large'>
                <Container>
                    <Menu.Item as='a' header><Image size='mini' src={logo} /></Menu.Item>
                    <Menu.Menu position='right'>
                    <Menu.Item as='a'>About</Menu.Item>
                    <Menu.Item onClick={() => onRouteChange('signin')} as='a'>Sign Out</Menu.Item>
                    </Menu.Menu>
                </Container>                
            </Menu>
        )
    } else {
        return (
            <Menu borderless size='large'>
                <Container>
                    <Menu.Item as='a' header><Image size='mini' src={logo} /></Menu.Item>
                    <Menu.Menu position='right'>
                    <Menu.Item as='a'>About</Menu.Item>
                    <Menu.Item onClick={() => onRouteChange('signin')} as='a'>Sign In</Menu.Item>
                    </Menu.Menu>
                </Container>                
            </Menu>
        )
    }
}

export default Navigation;