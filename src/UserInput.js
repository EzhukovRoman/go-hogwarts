import React, { Component } from 'react'

export default class UserInput extends Component {

    changeHandler = (event) => {    
        this.props.inputHandler(event.target.value);               
      }

  render() {
    return (
      <div>
        <input type="text" placeholder="Type your house Name" value={this.props.houseName} onChange={this.changeHandler} />
      </div>
    )
  }
}
