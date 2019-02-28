import React, { Component } from 'react'

export default class MakeResponse extends Component {

  render() {
    let response ; 
    const houseName = this.props.computedInput;
    const houses = this.props.houses;

    if (houseName === "") {
        this.response = "";
      } else {       
        const hogwartsHouse = houses.find(house=>{
          return house.name === houseName;       
        });  
        if(hogwartsHouse !== undefined ){
          response = (<div className="response">
                            <h2>GO Team {hogwartsHouse.name}! </h2>
                            <img src={hogwartsHouse.crest} alt="Crest of house"/>
                          </div>
                          )
        } else {
          response = (
            <div className="response">
              <h2>Dont know team {houseName}! </h2>        
            </div>
          )
        }
      }

    return (
      <div>
        {response}
      </div>
    )
  }
}
