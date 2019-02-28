import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput';
import MakeResponse from './MakeResponse.js';

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

computedInput ;

inputHandler = (input)=>{
  this.setState({houseName: input});
  this.computedInput = input.trim();   
}

  render() {      
    return (
      <div className="App">
        <header className="App-header">
        <h2>Go Hogwarts Houses!</h2> 
        </header>
        <UserInput houseName={this.state.houseName} inputHandler={this.inputHandler}/>
        <MakeResponse computedInput={this.computedInput} houses={this.state.houses}/>
      </div>      
    );
  }
}

export default App;
