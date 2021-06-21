import Header from './Components/Header/Header';
// import Footer from './Components/Footer/Footer';

import Home from './Components/Home/Home';
import AboutUs from './Components/AboutUs/AboutUs';
import Internship from "./Components/Internship/Internship";
import GetInTouch from './Components/GetInTouch/GetInTouch';

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about-us' component={AboutUs} />
          <Route exact path='/internship' component={Internship} />
          <Route exact path='/get-in-touch' component={GetInTouch} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    );
  }
}

export default App;
