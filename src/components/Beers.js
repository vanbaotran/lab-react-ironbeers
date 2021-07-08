import React from 'react';
import axios from 'axios'

class Beers extends React.Component{

    state = {beersList:[]}
   
    getTheData = () => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then(response=>{
            console.log(response.data)
            this.setState({
                beersList: response.data
            })
        })
        .catch(err=>console.log(err))
    }
    componentDidMount(){
        this.getTheData()
    }
    render(){
        return (
            <ul>
                 {this.state.beersList.map(beer=>{
                return <li className='eachBeer' key={beer._id} style={{listStyle:'none'}}>
                    <img src={beer.image_url} alt=''/>
                    <div>
                        <h3>{beer.name}</h3>
                        <p style={{color:'gray'}}>{beer.tagline}</p>
                        <p>Created by: {beer.contributed_by}</p>
                    </div>
                </li>
          })}
            </ul>
         
        )
    }
}
export default Beers