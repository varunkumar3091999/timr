import React from 'react';
import logo from './logo.svg';
import './App.css';


import Timer from "./components/Timer";
import StopWatch from "./components/StopWatch";
class App  extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {

    return(
     <div>
       <Timer />
        <StopWatch />
     </div>
  )
}
}

export default App;
