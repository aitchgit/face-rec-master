import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, boxes }) => {
  return (
    <div>
      <div>
        <img id='inputimage' alt='' src={imageUrl} width='500px' height='auto'/>
        {boxes.map(box =>
          <div key={`box${box.topRow}${box.rightCol}`}
              className='bounding-box'
              style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}>
          </div>
        )}
      </div>
    </div>
  );
}

export default FaceRecognition;