import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
           <h3>Hello world</h3>
        </header>
        <p className="App-intro">
          {this.props.name} says: I need some coffee
        </p>
      </div>
    );
  }
}

export default App;
