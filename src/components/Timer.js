import React from "react";


class Timer extends React.Component {
	constructor(props) {
		super(props) 
			this.state = {
				seconds: 59,
				minutes: 0,
				hours: 0
			}
			this.startTimer = this.startTimer.bind(this)
	}



	componentDidMount() {

		this.setState({
			seconds: document.getElementById("timerSeconds").value,
			minutes: document.getElementById("timerMinutes").value,
			// hours: document.getElementById("timerHours").value
		})
			document.getElementById("start").disabled = true;
			//button will be enabled when count is increased
	}

	startTimer = () => {

		this.setState({
			seconds: this.state.seconds || document.getElementById("timerSeconds").value,
			minutes: this.state.Minutes || document.getElementById("timerMinutes").value,
			// hours: this.state.hours || document.getElementById("timerHours").value
		})
			
		this.secondsInterval = setInterval(() => {
					// if(this.state.hours === 0){
					// 	console.log("sjvnkjas")
					// 	return
					// }
					// if(this.state.minutes || this.state.seconds || this.state.hours > 0){
						console.log("sdlkndf")
						this.setState({
							seconds: this.state.seconds==0?59:parseInt(this.state.seconds-1),
							minutes: this.state.seconds==0?parseInt(this.state.minutes-1):this.state.minutes
					})
					// }
					console.log(this.state)
					document.getElementById("start").disabled = true;

					if(this.state.seconds < 1 && this.state.minutes < 1) {
						clearInterval(this.secondsInterval)
					}
				}, 1000)
			 
	 	

	 	// this.minutesInterval = setInterval(() => {
			// 	if(this.state.minutes === 0){
			// 		return
			// 	}
			// 	this.setState({
			// 			minutes: this.state.minutes - 1
			// 	})
			// 	document.getElementById("start").disabled = true;

			// 	if(this.state.minutes < 1) {
			// 		clearInterval(this.minutesInterval)
			// 		console.log("clearinterval")
			// 	}
				
			// }, 60000)

	 	document.getElementById("timerSeconds").value = null;
	 }

	 pauseTimer = () => {
	 	clearInterval(this.secondsInterval)
	 	clearInterval(this.minutesInterval)
	 	document.getElementById("start").disabled = false;
	 }

	 reset = () => {
	 	this.setState({
	 		seconds: 0,
	 		minutes: 0
	 	})
	 }

	 enableStartButton = () => {
		document.getElementById("start").disabled = false;

		this.setState({
			seconds: document.getElementById("timerSeconds").value,
			minutes: document.getElementById("timerMinutes").value,
			// hours: document.getElementById("timerHours").value
		})
	 }
	

	render() {
		var {hours, seconds, minutes} = this.state;
		return(
			<div>
				{/*<input 
					type="number" 
					id="timerHours" 
					defaultValue={0}
					max={59}
					min={0}
					onChange={this.enableStartButton}
				/>*/}
				<input 
					type="number" 
					id="timerMinutes" 
					defaultValue={0}
					max={59}
					min={0}
					onChange={this.enableStartButton}
				/>
				<input 
					type="number" 
					id="timerSeconds" 
					defaultValue={0}
					max={59}
					min={0}
					onChange={this.enableStartButton}
				/>
				<h1>{minutes +":"+ seconds} </h1>
				<button onClick={this.startTimer} id="start">Start</button>
				<button onClick={this.pauseTimer}>pause</button>
				<button onClick={this.reset}>reset</button>
			</div>
		)
	}
}

export default Timer