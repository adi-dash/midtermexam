import './App.css';
import { useState } from "react";

// Display Function
function Display({ display }) {
  return <>{display}</>;
}

// Key Function
function Key({ label, onClick, className }) {
  return (
    <button onClick={onClick} className={className}>
      {label}
    </button>
  );
}

// App Function
function App() {
  const [disp, setDisp] = useState("10 Things That Require Zero Talent");

  const items = [
    "Being On Time",
    "Making An Effort",
    "Being High Energy",
    "Having A Positive Attitude",
    "Being Passionate",
    "Using Good Body Language",
    "Being Coachable",
    "Doing A Little Extra",
    "Being Prepared",
    "Having A Strong Work Ethic"
  ];

  const itemClickHandler = (value) => {
    setDisp(value);
  };

  const resetClickHandler = () => {
    setDisp("10 Things That Require Zero Talent");
  };

  const nameClickHandler = () => {
    const fullName = "ADRIAN JHAN Y. ARCEGA";
    setDisp(fullName);
  };

  return (
    <div className="App">
      <div className="Header">
        Adrian Jhan Y. Arcega - IT3A
      </div>

      <div className="Disp">
        <Display display={disp} />
      </div>
      
      <div className="Buttons">
        {items.map((item, index) => (
          <Key key={index} label={index + 1} onClick={() => itemClickHandler(item)} />
        ))}
        <Key label={"RESET"} onClick={resetClickHandler} className="Clear" />
        <Key label={"NAME"} onClick={nameClickHandler} />
      </div>
    </div>
  );
}

export default App;
