import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { number: 0 };
  }

  componentDidMount(){
    this.setState({number: 1})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
           <h3>Hello world</h3>
        </header>
        <p className="App-intro">
          {this.props.name} says: I need some coffee {this.state.number}
        </p>
      </div>
    );
  }
}

export default App;
