import React,{ Component } from 'react'

class PersonalCard extends Component{
    render(){
        return(
            <div className='item'>
                <h1>{this.props.name}</h1>
                <h3>Age: {this.props.age}</h3>
                <h3>Hair Color: {this.props.hairColor}</h3>
            </div>
        )
    }
}

export default PersonalCard;