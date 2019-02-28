import React, { Component } from 'react'

export default class UserInput extends Component {

    

  render() {
    return (
      <div>
        <input type="text" placeholder="Type your house Name" value={this.props.houseName} onChange={this.changeHandler} />
      </div>
    )
  }
}
