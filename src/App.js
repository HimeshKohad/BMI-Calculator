import React, { useMemo, useState } from "react";
import './App.css';

const App = () => {
  const [height, setHeight] = useState(140);
  const [weight, setWeight] = useState(50);

  function onWeightChange(event){
    setWeight(event.target.value);
  }

  function onHeightChange(event) {
    setHeight(event.target.value);
  }

  const output = useMemo(() => {
    const calculateHeight = height / 100;

    return (weight / (calculateHeight*calculateHeight)).toFixed(1)
  } ,[weight, height])

  return <main className="main-section">
    <h1 className="heading"> BMI Calculator </h1>
    <div className="input-section">
      <p className="slider-output">Weight: {weight} kg</p>
      <input className="input-slider" type="range" step={1} min={40} max={200} onChange={onWeightChange}></input>

      <p className="slider-output">Height: {height} cm</p>
      <input className="input-slider" type="range" step={1} min={140} max={220} onChange={onHeightChange}></input>
    </div>

    <div className="output-section">
      <p className="output-text">Your BMI is: </p>
      <p className="output">{output}</p>
    </div>
  </main>;
};

export default App;
