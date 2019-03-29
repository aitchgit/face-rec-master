import React from 'react';
import {  
  Container
} from 'semantic-ui-react';
  
const HomeScreen = ({ name, entries, toggleModal }) => {
  return (
    
      <Container>
        <h2>{`Hey ${name},`}</h2>
        <h3>{`You have submitted is ${entries} images.`}</h3>   
        <h4>{'Our secret program behind the scenes will detect faces in your pictures.'}</h4>  
        <h4>{'Paste the url and hit detect!'}</h4>  
        <h4 onClick={() => this.props.toggleModal()}>{'Edit Profile'}</h4> 
      </Container>
    
  );
}


export default HomeScreen;