/* eslint-disable require-jsdoc */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-tabs */
/* eslint-disable object-curly-spacing */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React, { useState } from "react";
import "./App.css";

export function replaceCamelWithSpaces(colorName) {
    // If we find a capital letter in the middle of a word and even if you find it multiple times, replace it with whatever
    // letter you found preceded by a space
    return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
    let ren;

    // ************************************************************ 1 **********************************************************

    // ren = (
    // 	<div className="App">
    // 	  <header className="App-header">
    // 	    <img src={logo} className="App-logo" alt="logo" />
    // 	    <p>
    // 	      Edit <code>src/App.js</code> and save to reload.
    // 	    </p>
    // 	    <a
    // 	      className="App-link"
    // 	      href="https://reactjs.org"
    // 	      target="_blank"
    // 	      rel="noopener noreferrer"
    // 	    >
    // 	      Learn React
    // 	    </a>
    // 	  </header>
    // 	</div>
    // );

    // ************************************************************ 1 **********************************************************

    // ************************************************************ 2 **********************************************************

    // const [ buttonColor, setButtonColor ] = useState('red');
    // const [ disabled, setDisabled ] = useState(false);

    // const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

    // ren = (
    // 	<div>
    // 		<button
    // 			style={{backgroundColor: buttonColor, color: 'white'}}
    // 			onClick={() => setButtonColor(newButtonColor)}
    // 			disabled={disabled}>Change to {newButtonColor}
    // 		</button>
    // 		<br />
    // 		<input
    // 			type="checkbox"
    // 			id="disable-button-checkbox"
    // 			defaultChecked={disabled}
    // 			aria-checked={disabled}
    // 			onChange={(e) => setDisabled(e.target.checked)}
    // 		/>
    // 		<label htmlFor="disable-button-checkbox">Disable button</label>
    // 	</div>
    // );

    // ************************************************************ 2 **********************************************************

    // ************************************************************ 3 **********************************************************

    // const [ buttonColor, setButtonColor ] = useState('red');
    // const [ disabled, setDisabled ] = useState(false);

    // const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

    // ren = (
    // 	<div>
    // 		<button
    // 			style={{backgroundColor: disabled ? 'gray' : buttonColor}}
    // 			onClick={() => setButtonColor(newButtonColor)}
    // 			disabled={disabled}>Change to {newButtonColor}
    // 		</button>
    // 		<br />
    // 		<input
    // 			type="checkbox"
    // 			id="disable-button-checkbox"
    // 			defaultChecked={disabled}
    // 			aria-checked={disabled}
    // 			onChange={(e) => setDisabled(e.target.checked)}
    // 		/>
    // 		<label htmlFor="disable-button-checkbox">Disable button</label>
    // 	</div>
    // );

    // ************************************************************ 3 **********************************************************

    // ************************************************************ 4 **********************************************************

    const [buttonColor, setButtonColor] = useState("MediumVioletRed");
    const [disabled, setDisabled] = useState(false);

    const newButtonColor =
        buttonColor === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";

    ren = (
        <div>
            <button
                style={{ backgroundColor: disabled ? "gray" : buttonColor }}
                onClick={() => setButtonColor(newButtonColor)}
                disabled={disabled}
            >
                Change to {replaceCamelWithSpaces(newButtonColor)}
            </button>
            <br />
            <input
                type="checkbox"
                id="disable-button-checkbox"
                defaultChecked={disabled}
                aria-checked={disabled}
                onChange={(e) => setDisabled(e.target.checked)}
            />
            <label htmlFor="disable-button-checkbox">Disable button</label>
        </div>
    );

    // ************************************************************ 4 **********************************************************

    return ren;
}

export default App;
