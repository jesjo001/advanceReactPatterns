import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';

const Checkbox = ({children}) => {
  const [checked, setChecked] = useState(true)

  const allChildren = React.Children.map(children, (child) =>{
    const clone = React.cloneElement(child, {
      checked,
      setChecked
    });
    return clone;
  })

  return allChildren;
}

const CheckboxInput = ({checked, setChecked}) => {
  return (
    <input 
      type="checkbox"
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
    />
    )
}

const Label = ({setChecked, children}) => {
  return <label for="something" onClick={() => setChecked((state) => !state)}>{children}</label>
}
function App() {
  

  return (
    <Checkbox>
      <CheckboxInput />
      <Label>Check vox label</Label>
    </Checkbox>
  );
}

export default App;
