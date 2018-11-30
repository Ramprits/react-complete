import React, { Component } from "react";
import Persone from "./persone/persone";
import "bulma/css/bulma.css";
import "./App.css";

class App extends Component {
  state = {
    persone: [
      { name: "Ramprit Sahani", age: 26 },
      { name: "Anita Sahani", age: 23 }
    ]
  };
  switchnameHandler = () => {
    this.setState({
      persone: [
        { name: "Ramprit Sahani", age: 36 },
        { name: "Anita Sahani", age: 33 }
      ]
    });
  };
  render() {
    return (
      <div className="App">
        Welcome to the world of React!
        <button
          onClick={this.switchnameHandler}
          className="button is-small is-info is-pulled-center"
        >
          Switch name !
        </button>
        <Persone
          name={this.state.persone[0].name}
          age={this.state.persone[0].age}
        />
        <Persone
          name={this.state.persone[1].name}
          age={this.state.persone[1].age}
        >
          She is my wife
        </Persone>
      </div>
    );
  }
}

export default App;
