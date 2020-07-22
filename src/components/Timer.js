import React from "react";

import "../App.css"


class Timer extends React.Component {
	constructor(props) {
		super(props) 
			this.state = {
				seconds: 0,
				minutes: 0,
				hours: 0
			}
			this.startTimer = this.startTimer.bind(this)
	}



	componentDidMount() {


			//disabling buttons when everything in 0
			document.getElementById("start").disabled = true;
			document.getElementById("pause").disabled = true;
			document.getElementById("reset").disabled = true;
	}

	startTimer = () => {

		
		this.secondsInterval = setInterval(() => {
					// if(this.state.hours === 0){
					// 	console.log("sjvnkjas")
					// 	return
					// }
					// if(this.state.minutes || this.state.seconds || this.state.hours > 0){
					this.setState({
						seconds: this.state.seconds==0?59:parseInt(this.state.seconds-1),
						minutes: this.state.hours > 0 && this.state.minutes==0?59:(this.state.seconds==0?parseInt(this.state.minutes-1):this.state.minutes),
						hours: this.state.hours==0?0:(this.state.minutes==0?parseInt(this.state.hours-1):this.state.hours)
					})
					// }
					document.getElementById("start").disabled = true;
					document.getElementById("pause").disabled = false;

					if(this.state.seconds < 1 && this.state.minutes < 1) {
						clearInterval(this.secondsInterval)
						
							//show notification
					 	const notification = new Notification("Time Out!!", {
					 		body: "Time set on timR has ended",
					 		icon: require("../images/logo.png")
					 	})

					 	Notification.onClick = (e) => {
					 		window.location.href = "/"
					 	}
					}
				}, 1000)

	 }

	 pauseTimer = () => {
	 	clearInterval(this.secondsInterval)
	 	clearInterval(this.minutesInterval)
	 	clearInterval(this.hoursInterval)
	 	document.getElementById("start").disabled = false;
	 }

	 reset = () => {
	 	this.setState({
	 		seconds: "00",
	 		minutes: "00",
	 		hours: "00"
	 	})
	 	clearInterval(this.secondsInterval);
	 	document.getElementById("start").disabled = true;
	 	document.getElementById("reset").disabled = true;
	 }

	 secondsInc = () => {
	 	this.setState({
	 		seconds: parseInt(this.state.seconds + 1)
	 	})
	 	document.getElementById("start").disabled = false;
		document.getElementById("reset").disabled = false;
	 }
	 secondsDec = () => {
	 	this.setState({
	 		seconds: parseInt(this.state.seconds - 1)
	 	})
	 }

	 minutesInc = () => {
	 	this.setState({
	 		minutes: parseInt(this.state.minutes + 1)
	 	})
	 	document.getElementById("start").disabled = false;
		document.getElementById("reset").disabled = false;
	 }
	 minutesDec = () => {
	 	this.setState({
	 		minutes: parseInt(this.state.minutes - 1)
	 	})
	 }

	 hoursInc = () => {
	 	this.setState({
	 		hours: parseInt(this.state.hours + 1)
	 	})
	 	document.getElementById("start").disabled = false;
		document.getElementById("reset").disabled = false;
	 }
	 hoursDec = () => {
	 	this.setState({
	 		hours: parseInt(this.state.hours - 1)
	 	})
	 }
	

	render() {
		var {hours, seconds, minutes} = this.state;
		return(
			<div>
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

				<img src={require("../images/logo.png")} alt="logo" className="logo"  />

				<div className="timer">
					<div>
						<button onClick={this.hoursInc} className="incDec"><i class="fa fa-caret-up" aria-hidden="true"></i></button>
						<h1 className="h1">{hours}</h1>
						<button onClick={this.hoursDec} className="incDec"><i class="fa fa-caret-down" aria-hidden="true"></i></button>
					</div>
					<div>
						<button onClick={this.minutesInc} className="incDec"><i class="fa fa-caret-up" aria-hidden="true"></i></button>
						<h1 className="h1"> :  {minutes} : </h1>
						<button onClick={this.minutesDec} className="incDec"><i class="fa fa-caret-down" aria-hidden="true"></i></button>
					</div>
					<div>
						<button onClick={this.secondsInc} className="incDec"><i class="fa fa-caret-up" aria-hidden="true"></i></button>
						<h1 className="h1">{seconds}</h1>
						<button onClick={this.secondsDec} className="incDec"><i class="fa fa-caret-down" aria-hidden="true"></i></button>
					</div>
				</div>



				<button 
					onClick={this.startTimer} 
					id="start"
					className="button"
				><i className="fa fa-play" aria-hidden="true"/></button>
				<button 
					id="pause"
					onClick={this.pauseTimer}
					className="button"
				><i className="fa fa-pause" aria-hidden="true" /></button>
				<button 
					onClick={this.reset}
					id="reset"
					className="button"
				><i className="fa fa-refresh" aria-hidden="true" /></button>
			</div>
		)
	}
}

export default Timer