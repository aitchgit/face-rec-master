import React from 'react';
  
const HomeScreen = ({ name, entries }) => {
  return (
    <div>
      <h3>{`Hey ${name}, you have submitted is ${entries} images`}</h3>   
      <h4>{'Our secret program behind the scenes will detect faces in your pictures.'}</h4>  
      <h4>{'Paste the url and hit detect!'}</h4>   
    </div>
  );
}


export default HomeScreen;