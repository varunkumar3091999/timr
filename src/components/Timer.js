import React from "react";

import {Link} from 'react-router-dom';

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


			// if(this.state.hours===0 && this.state.minutes===0 && this.state.seconds===0){
			// 	document.getElementById("Dec").disabled = true;
			// }

			//disabling buttons when everything in 0
			document.getElementById("start").disabled = true;
			document.getElementById("pause").disabled = true;
			document.getElementById("reset").disabled = true;
	}

	startTimer = () => {

		//Checking if the user gave access the the notificationsNotifications
		 	if(Notification.permissiont === "granted") {
		 		alert("we have permission");
		 	} else if(Notification.permission !== "denied"){
		 		Notification.requestPermission().then((permission) => {
		 			console.log(permission)
		 		})
		 	}	

		if(this.state.hours===0 && this.state.minutes===0 && this.state.seconds===0) {
	 		return
	 	}
		
		this.secondsInterval = setInterval(() => {
					
					this.setState({
						seconds: this.state.seconds===0?59:parseInt(this.state.seconds-1),
						minutes: this.state.hours > 0 && this.state.minutes===0?59:(this.state.seconds===0?parseInt(this.state.minutes-1):this.state.minutes),
						hours: this.state.hours===0?0:(this.state.minutes===0?parseInt(this.state.hours-1):this.state.hours)
					})
					// }
					document.getElementById("start").disabled = true;
					document.getElementById("pause").disabled = false;

					//disabling increment decrement buttons when timer is running
					var elements = document.getElementsByClassName("incDec");

						for (var i = 0; i < elements.length; i++) {
  							elements[i].disabled =true;
						}
					//


					if(this.state.seconds < 1 && this.state.minutes < 1) {
						clearInterval(this.secondsInterval)

						document.getElementById("start").disabled = true;
					 	document.getElementById("pause").disabled = true;
					 	document.getElementById("reset").disabled = true;
						
							//show notification
					const notification =  new Notification("Time Out!!", {
					 		body: "Time set on timR has ended",
					 		icon: require("../images/logo.png")
					 	})

					 	notification.onClick = (e) => {
					 		window.location.href = "/"
					 	}
					}
				}, 1000)

	 }

	 pauseTimer = ( {seconds, minutes, hours}) => {

	 	// this.state =

	 	clearInterval(this.secondsInterval)
	 	clearInterval(this.minutesInterval)
	 	clearInterval(this.hoursInterval)
	 	document.getElementById("start").disabled = false;
	 	document.getElementById("pause").disabled = true;

	 	if(hours===0 && minutes===0 &seconds===0) {
	 		document.getElementById("start").disabled = true;
	 	}


	 }

	 reset = () => {
	 	this.setState({
	 		seconds: 0,
	 		minutes: 0,
	 		hours: 0
	 	})
	 	clearInterval(this.secondsInterval);

	 	// disabling play pause reset when all values are 0
	 	document.getElementById("start").disabled = true;
	 	document.getElementById("pause").disabled = true;
	 	document.getElementById("reset").disabled = true;
	 	//

	 	//enabling increment decrement button when timer is reset
	 	var elements = document.getElementsByClassName("incDec");
			for (var i = 0; i < elements.length; i++) {
					elements[i].disabled =false;
			}

		// var decrement = document.getElementsByClassName("Dec");
		// 	for (var i = 0; i < decrement.length; i++) {
		// 			decrement[i].disabled =false;
		// 	}
		//
	 }

	 secondsInc = () => {
	 	this.setState({
	 		seconds: parseInt(this.state.seconds + 1)
	 	})
	 	document.getElementById("start").disabled = false;
		document.getElementById("reset").disabled = false;
	 }
	 secondsDec = () => {
	 	if(this.state.seconds===0){
	 		return
	 	}
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
	 	if(this.state.minutes===0){
	 		return
	 	}
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
	 	if(this.state.hours===0){
	 		return
	 	}
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
						<button onClick={this.hoursInc} className="incDec"><i className="fa fa-caret-up" aria-hidden="true"></i></button>
						<h1 className="h1">{hours}</h1>
						<button onClick={this.hoursDec} className="incDec  Dec"><i className="fa fa-caret-down" aria-hidden="true"></i></button>
					</div>
					<div>
						<button onClick={this.minutesInc} className="incDec"><i className="fa fa-caret-up" aria-hidden="true"></i></button>
						<h1 className="h1">:{minutes}:</h1>
						<button onClick={this.minutesDec} className="incDec  Dec"><i className="fa fa-caret-down" aria-hidden="true"></i></button>
					</div>
					<div>
						<button onClick={this.secondsInc} className="incDec"><i className="fa fa-caret-up" aria-hidden="true"></i></button>
						<h1 className="h1">{seconds}</h1>
						<button onClick={this.secondsDec} className="incDec Dec"><i className="fa fa-caret-down" aria-hidden="true"></i></button>
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

				<div>
					<button className="Link">
						<Link to="/stopwatch" className="Link">to Stopwatch<i className="fa fa-link" aria-hidden="true"></i></Link>
					</button>
				</div>
			</div>
		)
	}
}

export default Timer