import React from "react";

import {Link} from 'react-router-dom';

import "../App.css";
// @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");

class StopWatch extends React.Component {
	constructor(props) {
		super(props) 
			this.state = {
				seconds: 0,
				minutes: 0,
				hours: 0
			}


			// this.startStopWatch = this.startTimer.bind(this)
	}



	showNotification = () => {
		const notification = new Notification("One Hour!", {
		 body: `${this.state.hours} hour(s) has beed passed `,
		 icon: require("../images/logo.png")
 	})

 	notification.onClick = (e) => {
		 window.location.href = "/StopWatch"
	}
	}

	startStopWatch = () => {

			//Checking if the user gave access the the notificationsNotifications
		 	 if(Notification.permission !== "denied"){
		 		Notification.requestPermission().then((permission) => {
		 			console.log(permission)
		 		})
		 	}	

	 		this.secondInterval = setInterval(() => {
				this.setState({
			    	seconds: this.state.seconds===59?0:parseInt(this.state.seconds + 1)
			    })

			}, 1000)

	 		this.minutesInterval = setInterval(() => {
	 			console.log(2)
	 			this.setState({
	 				minutes: this.state.minutes===59?0:parseInt(this.state.minutes + 1),
	 			})
	 		}, 60000)

	 		this.hoursInterval = setInterval(() => {
	 			this.setState({
	 				hours: parseInt(this.state.hours + 1),
	 			})
	 			//show notification
	 			this.showNotification();
			
	 		}, 3600000)

	 	document.getElementById("startStopWatch").disabled = true;
	 }

	 pauseStopWatch = () => {
	 	clearInterval(this.secondInterval)
	 	clearInterval(this.minutesInterval)
	 	clearInterval(this.hoursInterval)
	 	document.getElementById("startStopWatch").disabled = false;
	 }

	 reset = () => {
	 	this.setState({
	 		seconds: 0
	 	})
	 	clearInterval(this.secondInterval)
	 	clearInterval(this.minutesInterval)
	 	clearInterval(this.hoursInterval)
	 	document.getElementById("startStopWatch").disabled = false;
	 }
	

	render() {
		var {hours, seconds, minutes} = this.state;
		return(
			<div>

				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
				
				<img src={require("../images/logo.png")} alt="logo" className="logo"  />
				
				<h1 className="h1">{hours} : {minutes} : {seconds}</h1>
				<button 
					onClick={this.startStopWatch} 
					id="startStopWatch"
					className="button"
				><i className="fa fa-play" aria-hidden="true"></i></button>
				<button 
					onClick={this.pauseStopWatch}
					className="button"
				><i className="fa fa-pause" aria-hidden="true"></i></button>
				<button 
					onClick={this.reset}
					className="button"
				><i className="fa fa-refresh" aria-hidden="true"></i></button>

				<div>
					<button className="Link">
						<Link to="/" className="Link">to Timer<i className="fa fa-link" aria-hidden="true"></i></Link>
					</button>
				</div>
				

			</div>
		)
	}
}

export default StopWatch