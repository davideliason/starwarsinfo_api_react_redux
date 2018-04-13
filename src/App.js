import React, { Component } from 'react';
import './App.css';
import {Row,Col,Jumbotron} from 'react-bootstrap';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { pictures: [], number : 1};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){

    fetch('https://randomuser.me/api/?results={this.state.number}')
    .then(results => {
      return results.json();
    }).then(data => {
      let pictures = data.results.map((pic) => {
        return (
          <div key={pic.results}>
             <img src={pic.picture.medium} />
          </div>
          )
      })
      this.setState({pictures: pictures})
      console.log("planets", this.state.planets);
    })
  }

   handleChange(e) {
    this.setState({ name: e.target.value });
  }

   handleSubmit(e) {
    e.preventDefault();
    if (!this.state.name.length) {
      return;
    }
    const newPlanet = {
      name: this.state.name,
      id: Date.now()
    };
    this.setState(prevState => ({
      planets: prevState.items.concat(newPlanet),
      name: ''
    }));
  }

  render() {
    return (
      <div>
        <Jumbotron>
          <Row>
             <h3>Star Wars: Planets</h3>
          </Row>
        </Jumbotron>
          {this.state.pictures}


        <form onSubmit={this.handleSubmit} >
          <input 
          onChange={this.handleChange}
          value={this.state.name}
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
         {this.props.planets.map(planet => (
          <li key={planet.id}>{planet.name}</li>
        ))}
      </ul>

    )
  }
}

export default App;
