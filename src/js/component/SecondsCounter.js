import React, { useState } from "react";

import PropType from "prop-types";

//include images into your bundle

import rigoImage from "../../img/rigo-baby.jpg";

//create your first comp0nt

export const SecondsCounter = props => {
	// const [test, setTest] = useState();

	function myStopFunction() {
		clearInterval(props.myVar);
	}

	function myResetFunction() {
		location.reload();
	}

	function myResumeFunction() {
		props.counter = 0;
	}
	return (
		<div className="margins">
			<h1 className="text-center">Simple Counter</h1>
			<div className="container bg-info text-white rounded-lg">
				<div className="row d-flex justify-content-center">
					<span className="col border border-light d-flex pt-4 justify-content-center">
						<i className="far fa-clock fa-5x" />
					</span>

					<span className="col border border-light display-1 d-flex justify-content-center">
						{props.secondsSix % 10}
					</span>

					<span className="col border border-light display-1 d-flex justify-content-center">
						{props.secondsFive % 10}
					</span>

					<span className="col border border-light display-1 d-flex justify-content-center">
						{props.secondsFour % 10}
					</span>

					<span className="col border border-light display-1 d-flex justify-content-center">
						{props.secondsThree % 10}
					</span>

					<span className="col border border-light display-1 d-flex justify-content-center">
						{props.secondsTwo % 10}
					</span>

					<span className="col border border-light display-1 d-flex justify-content-center">
						{props.secondsOne % 10}
					</span>
				</div>
			</div>
			<div>
				<div className="d-flex row justify-content-center  mx-auto buttons mt-3">
					<button
						className="btn btn-dark mr-1 btn-lg"
						onClick={() => myStopFunction()}>
						{" "}
						Stop{" "}
					</button>
					<button
						className="btn btn-dark btn-lg"
						onClick={() => myResetFunction()}>
						{" "}
						Reset{" "}
					</button>
					{/* <button
						className="btn btn-dark"
						onClick={() => myResumeFunction()}>
						{" "}
						Resume{" "}
					</button> */}
				</div>
			</div>
		</div>
	);
};
SecondsCounter.propTypes = {
	secondsOne: PropType.number,

	secondsTwo: PropType.number,

	secondsThree: PropType.number,

	secondsFour: PropType.number,

	secondsFive: PropType.number,

	secondsSix: PropType.number,

	myVar: PropType.number,

	counter: PropType.number
};
