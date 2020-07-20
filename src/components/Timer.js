import React from "react";

import "../App.css"


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
			hours: document.getElementById("timerHours").value
		})
			document.getElementById("start").disabled = true;
			document.getElementById("pause").disabled = true;
			document.getElementById("reset").disabled = true;
			//button will be enabled when count is increased


	}

	startTimer = () => {

		this.setState({
			seconds: this.state.seconds!==0?this.state.seconds:document.getElementById("timerSeconds").value,
			minutes: this.state.minutes!==0?this.state.minutes:document.getElementById("timerMinutes").value,
			hours: 	 this.state.hours!==0?this.state.hours:document.getElementById("timerHours").value,
		})
			
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
	 	clearInterval(this.secondsInterval)
	 }

	 enableStartButton = () => {
		document.getElementById("start").disabled = false;
		document.getElementById("pause").disabled = false;
		document.getElementById("reset").disabled = false;

		this.setState({
			seconds: document.getElementById("timerSeconds").value,
			minutes: document.getElementById("timerMinutes").value,
			hours: document.getElementById("timerHours").value
		})



		//Checking if the user gave access the the notificationsNotifications
		 	if(Notification.permissiont === "granted") {
		 		alert("we have permission");
		 	} else if(Notification.permission !== "denied"){
		 		Notification.requestPermission().then((permission) => {
		 			console.log(permission)
		 		})
		 	}	
	 }
	

	render() {
		var {hours, seconds, minutes} = this.state;
		return(
			<div>
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

				<img src={require("../images/logo.png")} alt="logo" className="logo"  />

				<input 
					type="number" 
					id="timerHours" 
					defaultValue="00"
					max={59}
					min={0}
					onChange={this.enableStartButton}
					className="input"
				/>
				<input 
					type="number" 
					id="timerMinutes" 
					defaultValue="00"
					max={59}
					min={0}
					onChange={this.enableStartButton}
					className="input"
				/>
				<input 
					type="number" 
					id="timerSeconds" 
					defaultValue="00"
					max={59}
					min={0}
					onChange={this.enableStartButton}
					className="input"
				/>
				<h1>{hours}:{minutes}:{seconds} </h1>
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