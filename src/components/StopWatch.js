import React from "react";


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



	componentDidMount() {
		console.log(this.state.seconds)
	}

	startStopWatch = () => {

			//Checking if the user gave access the the notificationsNotifications
		 	if(Notification.permissiont === "granted") {
		 		alert("we have permission");
		 	} else if(Notification.permission !== "denied"){
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
			 	const notification = new Notification("One Hour!", {
					 body: `${this.state.hours} hour(s) has beed passed `
			 	})

			 	Notification.onClick = (e) => {
					 window.location.href = "/StopWatch"
				}
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
				<h1>{hours} : {minutes} : {seconds}</h1>
				<button onClick={this.startStopWatch} id="startStopWatch">Start</button>
				<button onClick={this.pauseStopWatch}>pause</button>
				<button onClick={this.reset}>reset</button>
			</div>
		)
	}
}

export default StopWatch