import React, { Component } from 'react';
import './App.css';
import {Row,Col,Jumbotron} from 'react-bootstrap';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { planets: [] };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidMount(){
  //   this.setState({items: 1})
  // }

   handleChange(e) {
    this.setState({ text: e.target.value });
  }

   handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
  }

  render() {
    return (
      <div>
        <Jumbotron>
          <Row>
             <h3>Star Wars</h3>
          </Row>
        </Jumbotron>

        <PlanetList planets={this.state.planets} />

        <form onSubmit={this.handleSubmit} >
          <input 
          onChange={this.handleChange}
          value={this.state.text}
          />
           <button>
            Get Another Planet
          </button>
        </form>
      </div>
    );
  }
}

class PlanetList extends Component{
  render(){
    return (
      <ul>
         {this.props.planets.map(item => (
          <li key={planet.id}>{planet.name}</li>
        ))}
      </ul>

    )
  }
}

export default App;
