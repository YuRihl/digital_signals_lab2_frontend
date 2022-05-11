import { useState } from 'react';
import './App.css';
import InputForm from './input-form/input-form';
import Canvas from './canvas/canvas';

function App() {
  const [x, setX] = useState([]);
  const [functionY, setFunctionY] = useState([]);
  const [fourierY, setFourierY] = useState([]);
  const [mnkY, setMnkY] = useState([]);

  const receiveCanvasData = (x, firstY, secondY, thirdY) => {
    setX(x);
    setFunctionY(firstY);
    setFourierY(secondY);
    setMnkY(thirdY);
  }
  
  return (
    <div id='app'>
      <InputForm receiveData={receiveCanvasData}></InputForm>
      <Canvas x={x} funcY={functionY} fourY={fourierY} mnkY={mnkY}></Canvas>
    </div>
  );
}

export default App;
