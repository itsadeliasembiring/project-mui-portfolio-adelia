// Import
import React from 'react';
import ResponsiveAppBar from './component/ResponsiveAppBar';
import Home from './component/Home';
import About from './component/About';
import Project from './component/Project';
import Skill from './component/Skill';
import Contact from './component/Contact';


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='App'>
        <ResponsiveAppBar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/project" component={Project}/>
          <Route path="/skill" component={Skill}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;