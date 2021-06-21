import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import GetInTouch from './Components/GetInTouch/GetInTouch';

import Internship from "./Components/Internship/Internship";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from './Components/Footer/Footer';
import WhatWeDo  from './Components/Home/WorksComp/WhatWeDo';
import AboutUs from './Components/AboutUs/AboutUs';

import React, { Component } from 'react';

// function App() {
//   return (
//     <Router>
//     <div>
//       <Header />
//       <Switch>
//          <Route exact path='/' component={Home} />
//          <Route path='/' component={WhatWeDo}/>
//       </Switch>
//       <Footer />
//     </div>
//     </Router>
//   );
// }

// export default App;

// function App() {
//   return (
//     <Router>
//     <div>
//       <Header />
//       <AboutUs />
//       <Footer />
//     </div>
//     </Router>
//   );
// }
// export default App;

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <GetInTouch />
        </div>
      </Router>
    )
  }
}

export default App;
