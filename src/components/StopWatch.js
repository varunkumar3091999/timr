import React from "react";


class StopWatch extends React.Component {
	constructor(props) {
		super(props) 
			this.state = {
				counter: 0
			}


			// this.startStopWatch = this.startTimer.bind(this)
	}



	componentDidMount() {

		if(this.state.counter === 0) {
			document.getElementById("start").disabled = true;
		}

		console.log(this.state.counter)
	}

	startStopWatch = () => {

	 	this.myInterval = setInterval(() => {
				this.setState({
			    	counter: parseInt(this.state.counter + 1)
			    })


				if(this.state.counter <= 0) {
					clearInterval(this.myInterval)
				}
			}, 1000)

	 	document.getElementById("startStopWatch").disabled = true;
	 }

	 pauseStopWatch = () => {
	 	clearInterval(this.myInterval)
	 }

	 reset = () => {
	 	this.setState({
	 		counter: 0
	 	})
	 	clearInterval(this.myInterval)
	 }

	 enableStartButton = () => {
		document.getElementById("start").disabled = false;
	 }
	

	render() {
		var counter = this.state.counter;
		return(
			<div>
				{/*<input 
					type="number" 
					id="timer" 
					defaultValue={0}
					onChange={this.enableStartButton}
				/>*/}
				<h1>StopWatch: {counter} seconds</h1>
				<button onClick={this.startStopWatch} id="startStopWatch">Start</button>
				<button onClick={this.pauseStopWatch}>pause</button>
				<button onClick={this.reset}>reset</button>
			</div>
		)
	}
}

export default StopWatch