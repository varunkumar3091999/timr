import React from "react";


class Timer extends React.Component {
	constructor(props) {
		super(props) 
			this.state = {
				count: 0
			}

			this.startTimer = this.startTimer.bind(this)
	}



	componentDidMount() {

		this.setState({
			count: document.getElementById("timer").value
		})

		if(this.state.count === 0) {
			document.getElementById("start").disabled = true;
		}
	}

	startTimer = () => {

		this.setState({
			count: this.state.count || document.getElementById("timer").value
		})


	 	this.myInterval = setInterval(() => {
				this.setState({
					count: this.state.count - 1
				})
				document.getElementById("start").disabled = true;

				if(this.state.count <= 0) {
					clearInterval(this.myInterval)
				}
			}, 1000)

	 	document.getElementById("timer").value = null;
	 }

	 pauseTimer = () => {
	 	clearInterval(this.myInterval)
	 	document.getElementById("start").disabled = false;
	 }

	 reset = () => {
	 	this.setState({
	 		count: 0
	 	})
	 }

	 enableStartButton = () => {
		document.getElementById("start").disabled = false;

		this.setState({
			count: document.getElementById("timer").value
		})
	 }
	

	render() {
		var count = this.state.count;
		return(
			<div>
				<input 
					type="number" 
					id="timer" 
					defaultValue={0}
					onChange={this.enableStartButton}
				/>
				<h1>Timer: {count} seconds</h1>
				<button onClick={this.startTimer} id="start">Start</button>
				<button onClick={this.pauseTimer}>pause</button>
				<button onClick={this.reset}>reset</button>
			</div>
		)
	}
}

export default Timer