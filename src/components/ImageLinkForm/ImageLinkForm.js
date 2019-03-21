import React from 'react';
import {
    Button,
    Form,
  } from 'semantic-ui-react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onUrlSubmit }) => {
  return (
    <div>
        <Form>        
            <Form.Field style={{padding: '5px'}}>
            <input onChange={onInputChange} style={{maxWidth: '360px'}}/>                
            <Button type='submit' onClick={onUrlSubmit}>Detect</Button>
            </Form.Field>
        </Form>
    </div>
  );
}

export default ImageLinkForm;