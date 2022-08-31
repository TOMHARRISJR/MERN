import React,{ Component } from 'react'

class PersonalCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            age: this.props.age
        };
    }
    render(){
        return(
            <div className='item'>
                <h1>{this.props.lastname}, {this.props.firstname}</h1>
                <h3>Age: {this.state.age}</h3>
                <h3>Hair Color: {this.props.hairColor}</h3>
            <button onClick={()=>this.setState({age:this.state.age+1})}>Birthday Button for {this.props.firstname} {this.props.lastname}</button>
            </div>
        )
    }
}

export default PersonalCard;