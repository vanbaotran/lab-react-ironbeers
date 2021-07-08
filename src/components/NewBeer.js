import React from 'react';
import axios from 'axios';
class NewBeer extends React.Component{
    state={
        name:'',
        tagLine:'',
        description:'',
        firstBrewed:'',
        brewersTip:'',
        attenuationLevel:'',
        contributedBy:''
    }
  
    submitHandler = (event)=>{
        const {name,tagLine,description,firstBrewed,brewersTip,attenuationLevel,contributedBy}=this.state
        event.preventDefault() 
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new',{name,tagLine,description,firstBrewed,brewersTip,attenuationLevel,contributedBy})
            .then(response=>{
                console.log(response.data)
            })
            .catch(err=>console.log(err))
        this.setState({
            name:'',
            tagLine:'',
            description:'',
            firstBrewed:'',
            brewersTip:'',
            attenuationLevel:'',
            contributedBy:''
        })
    }
    handleChange = (event)=>{
        const {name,value}=event.target;
        this.setState({[name]:value})
    }
    render(){
        return (
           <form onSubmit={this.submitHandler}>
             <label>Name</label>
             <input type='text' name='name' value={this.state.name} onChange={(e)=>this.handleChange(e)}/>
             <label>Tagline</label>
             <input type='text' name='tagLine' value={this.state.tagLine} onChange={(e)=>this.handleChange(e)}/>
             <label>description</label>
             <input type='text' name='description' value={this.state.description} onChange={(e)=>this.handleChange(e)}/>
             <label>First Brewed</label>
             <input type='text' name='firstBrewed' value={this.state.firstBrewed} onChange={(e)=>this.handleChange(e)}/>
             <label>Brewers Tip</label>
             <input type='text' name='brewersTip' value={this.state.brewersTip} onChange={(e)=>this.handleChange(e)}/>
             <label>Attenuation Level</label>
             <input type='number' name='attenuationLevel' value={this.state.attenuationLevel} onChange={(e)=>this.handleChange(e)}/>
             <label>contributed By</label>
             <input type='text' name='contributedBy' value={this.state.contributedBy} onChange={(e)=>this.handleChange(e)}/>
             <input type='submit' value='ADD NEW'/>
           </form>
        )
    }
}
export default NewBeer