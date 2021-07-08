import React from 'react'
import {Link} from 'react-router-dom'
import beers from '../assets/beers.png'
import randomBeer from '../assets/random-beer.png'
import newBeer from '../assets/new-beer.png'
const Home = () =>{ 
    return (
        <main>
            <div>
                <Link to='/beers'>
                    <img src={beers} alt=''/>
                    <h1>All Beers</h1>
                </Link>
            </div>
            <div>
                <Link to='/random-beer'>
                    <img src={randomBeer} alt=''/>
                    <h1>Random Beer</h1>
                </Link>
            </div>
            <div>
            <Link to='/new-beer'>
                <img src={newBeer} alt=''/>
                <h1>New Beer</h1>
            </Link>
            </div>
        </main>
      
    )
}
export default Home