import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Beers extends React.Component{
    state = {
        beersList:[],
        query:''
    }
    handleChange = (event) =>{
        this.setState({
            query:event.target.value})
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${this.props.query}`)
        .then(response=>{
            let updatedList = response.data
            this.setState({
                beersList: updatedList,
                query:''
            })
        })
        .catch(err=>console.log(err))
       
    }
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
            <div>
                <input type='search' onChange={(e)=>this.handleChange(e)}/>
                <ul>
                 {this.state.beersList.map(beer=>{
                return (
                    <li className='eachBeer' key={beer._id} style={{listStyle:'none'}}>
                        <img src={beer.image_url} alt=''/>
                        <div>
                           <Link to={`/beers/${beer._id}`}> <h3>{beer.name}</h3></Link>
                            <p style={{color:'gray'}}>{beer.tagline}</p>
                            <p>Created by: {beer.contributed_by}</p>

                        </div>
                    </li>
                    )
                 })}
                </ul>
            </div>
          
         
        )
    }
}
export default Beers