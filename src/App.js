import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      houseName: "",
      houses: [
        {name: "Gryffindor", crest: "https://vignette.wikia.nocookie.net/harrypotter/images/7/70/G_final.jpg/revision/latest?cb=20120922143609"},
        {name: "Huffelpuff", crest: "https://vignette.wikia.nocookie.net/harrypotter/images/3/3f/H_final.jpg/revision/latest?cb=20111027164825"},
        {name: "Ravenclaw", crest: "https://vignette.wikia.nocookie.net/harrypotter/images/d/da/R_final.jpg/revision/latest?cb=20111021043855"},
        {name: "Slytherin", crest: "https://vignette.wikia.nocookie.net/harrypotter/images/d/da/S_final.jpg/revision/latest?cb=20111027165212"},
      ]
    }     
  }

changeHandler = (event) => {    
  this.setState({houseName: event.target.value}); 
  const input = event.target.value.trim().capitalize();  
  this.isInHouses(input);  
}

response ;

isInHouses(input ){
  if (input === "") {
    this.response = "";
  } else {
    const houseName = input;
    const houses = this.state.houses;
    let hogwartsHouse = houses.find(house=>{
      return house.name === houseName;       
    });  
    if(hogwartsHouse !== undefined ){
      this.response = (<div className="response">
                        <h2>GO Team {hogwartsHouse.name}! </h2>
                        <img src={hogwartsHouse.crest} alt="Crest of house"/>
                      </div>
                      )
    } else {
      this.response = (
        <div className="response">
          <h2>Dont know team {houseName}! </h2>        
        </div>
      )
    }
  }
    
}

  render() {      
    return (
      <div className="App">
        <header className="App-header">
        <h2>Go Hogwarts Houses!</h2> 
        </header>
        <input type="text" placeholder="Type your house Name" value={this.state.houseName} onChange={this.changeHandler} />
        {this.response}
      </div>      
    );
  }
}

export default App;
