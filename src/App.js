import React from 'react';
import './App.css';
import {Switch,Route,Link} from 'react-router-dom'
import Home from './components/Home.js'
import Beers from './components/Beers.js'
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import BeerDetails from './components/BeerDetails'

function App() {
  return (
    <div className="App">
    <header><Link to='/'>hello</Link>
    </header>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/beers' component={Beers}/>
        <Route path='/random-beer' component={RandomBeer}/>
        <Route path='/new-beer' component={NewBeer}/>
        <Route path="/beers/:id" component={BeerDetails} />
      </Switch>

    </div>
  );
}

export default App;
