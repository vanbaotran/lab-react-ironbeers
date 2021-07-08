import React from 'react';
import './App.css';
import {Switch,Route,Link} from 'react-router-dom'
import Home from './components/Home.js'
import Beers from './components/Beers.js'
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer'

function App() {
  return (
    <div className="App">
    <header><Link to='/'>coucou</Link>
    </header>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/beers' component={Beers}/>
        <Route path='/random-beer' component={RandomBeer}/>
        <Route path='/new-beer' component={NewBeer}/>
      </Switch>

    </div>
  );
}

export default App;
