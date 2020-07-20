import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";


import './App.css';


import Timer from "./components/Timer";
import StopWatch from "./components/StopWatch";
class App  extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {

    return(
      <BrowserRouter>
        <div className="App">
          <Route 
            exact
            path="/"
            component={Timer}
            />
            <Route 
            exact
            path="/stopWatch"
            component={StopWatch}
            />
        </div>
      </BrowserRouter>
     
  )
}
}

export default App;
