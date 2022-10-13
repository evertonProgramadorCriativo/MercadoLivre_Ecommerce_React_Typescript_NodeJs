import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
 

function App() {
  const [ativado, setAtivado] = useState(false);
  const buttonHandler = () => {
    setAtivado((current) => !current);
  };
  const [ativado2, setAtivado2] = useState(false);
  const buttonHandler2 = () => {
    setAtivado2((current) => !current);
  };
  useEffect(() => {
    console.log(ativado);
  }, [ativado]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <button onClick={buttonHandler} type="button">
          Dropdown
        </button>
        {ativado ? (
          <div className="dropdown-content">
            <a href="#">Link 1</a>
            <li onClick={buttonHandler2}>
              <a href="#">Link 2</a>
              {ativado2 ? (
                <div>
                  <a href="#">Link 13</a>
                  <a href="#">Link 13</a>
                  <a href="#">Link 13</a>
                </div>
              ): null }
            </li>
            <a href="#">Link 30</a>
          </div>
        ) : null}
      </header>
    </div>
  );
}

export default App;

/**
 * quando clica  o , a lista aparece
 * quando clica fora  da lista , a lista desaparece
 *
 */
