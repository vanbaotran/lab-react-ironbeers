import React from 'react';
import axios from 'axios'

class BeerDetails extends React.Component{
    state = {}
    getSingleBeer = () => {
        const {params}=this.props.match
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${params.id}`)
        .then(responseFromAPI=>{
            const theBeer=responseFromAPI.data
            this.setState(theBeer)
        })
        .catch(err=>console.log(err))
    }
    componentDidMount(){
        this.getSingleBeer();
    }
    render(){
        return(
            <div>
            <img src={this.state.image_url} alt=''/>
            <h2>{this.state.name}</h2>
            <h3>{this.state.tagline}</h3>
            <p>{this.state.first_brewed}</p>
            <p>{this.state.attenuation_level}</p>
            <p>{this.state.description}</p>
            <p>{this.state.contributed_by}</p>
            </div>
        )
    }
}
export default BeerDetails