//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//render your react application
import { SecondsCounter } from "./component/SecondsCounter.js";

var counter = 0;

myCounter();

export function myCounter() {
	var myVar = setInterval(function() {
		const six = Math.floor(counter / 100000);

		const five = Math.floor(counter / 10000);

		const four = Math.floor(counter / 1000);

		const three = Math.floor(counter / 100);

		const two = Math.floor(counter / 10);

		const one = Math.floor(counter); // 0/1 ; 1/1; 10/1; 11/1

		counter++; // counter = counter + 1

		ReactDOM.render(
			<SecondsCounter
				secondsOne={one} // 1 goes here// 11 goes here
				secondsTwo={two}
				secondsThree={three}
				secondsFour={four}
				secondsFive={five}
				secondsSix={six}
				myVar={myVar}
				counter={counter}
			/>,

			document.querySelector("#app")
		);
	}, 1000);

	// <button onClick={() => myStopFunction()}> stop </button>;
}

// var myVar = setInterval(startTimer(), 1000);
