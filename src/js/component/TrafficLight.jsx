import React from "react";

export default class TrafficLight extends React.Component {
	constructor() {
		super();
		this.state = {
			clickLight: null
		};
	}

	render() {
		console.log(this.state);
		let redClass = "";
		if (this.state.clickLight == "red") redClass = "selectedLight";
		let orangeClass = "";
		if (this.state.clickLight == "orange") orangeClass = "selectedLight";
		let greenClass = "";
		if (this.state.clickLight == "green") greenClass = "selectedLight";

		return (
			<div>
				<div id="trafficSupport" />
				<div id="container">
					<div
						className={"red light " + redClass}
						onClick={() => this.setState({ clickLight: "red" })}
					/>
					<div
						className={"orange light " + orangeClass}
						onClick={() => this.setState({ clickLight: "orange" })}
					/>
					<div
						className={"green light " + greenClass}
						onClick={() => this.setState({ clickLight: "green" })}
					/>
				</div>
			</div>
		);
	}
}
