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
  const [state, setState] = useState('idle')

  function clicked(){
    setState('loading')
    fetch('/data.json')
    .then((data) => {
      setState('loaded')
    })
    .catch((err) => {
      setState('error')
    })

    if(state === 'loading'){
      return( <div> Loading...</div>)
    }

    if(state === 'error'){
      return( <div> we just encountered an error Pls try again later...</div>)
    }
  }

  const props = {
    increament: 2,
    underline: true,
    color: 'black'
  }

  return (
    <div className="App" onClick={clicked}>
      
    </div>
  );
}

export default App;
