import React from 'react';
import './App.css';

import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import Publications from './Components/Publications/Publications'
import Staff from './Components/Staff/Staff';
import Research from './Components/Research/Research'

import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <Nav />
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/research' component={Research} />
            <Route path='/staff' component={Staff}/>
            <Route path='/publications' component={Publications} />
            <Route path='/contact' component={Contact}/>
        </Switch>
    </div>
  );
}

export default App;
