import React from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'


function App() {
  return (
    <div style={{textAlign:"center",marginTop:100}}>

    <h1> Build Apps with Reactjs <FontAwesomeIcon icon={faLaptopCode} /> </h1>
    <br />
    <br />
      <Button variant="outline-primary">Reactjs</Button>
      <p>+</p>
      <Button variant="outline-dark">Bootstrap 4</Button>

    </div>
  );
}

export default App;
