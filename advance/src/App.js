import logo from './logo.svg';
import { useState } from 'react'
import './App.css';

const Button = (props) => {
  const [ counter, setCounter] = useState(0)

  return (
    <div 
    style={{
      color: props.color,
      textDecoration: props.underline? 'underline' : undefined,
    }}
    onClick={() => setCounter((c) => c + props.increment)}
    >
      I am a Button
    </div>
  )
}

function App() {

  const props = {
    increament:2,
    underline: true,
    color: 'black'
  }

  return (
    <div className="App">
      <Button { ...props } color="black" />
      <Button { ...props } color="blue" />
      <Button { ...props } color="green" />
    </div>
  );
}

export default App;
