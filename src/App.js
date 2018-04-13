import React, { Component } from 'react';
import './App.css';
import {Row,Col,Jumbotron,Grid} from 'react-bootstrap';

const API = 'https://swapi.co/api/planets/?search=';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { planet: "", planetName : "", searchName:""};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){

    this.getAPICall();
  }

  getAPICall() {
    const planetSearch = this.state.searchName;

    fetch(API + planetSearch)
    .then(response => {
      return response.json();
    })
    .then(myJson => {
      console.log(myJson.results[0].name);
      this.setState({planet: myJson.results[0],
                    planetName : myJson.results[0].name})
    });
  }

   handleChange(e) {
    this.setState({ searchName: e.target.value });
  }

   handleSubmit(e) {
    e.preventDefault();
    if (!this.state.searchName.length) {
      return;
    }

    this.getAPICall();
  }

  render() {
    return (
      <div>
        <Grid>
         <Jumbotron>
          <Row>
            <Col xs={6}>
              <h1>Star Wars</h1>
            </Col>
            <Col xs={6}>
               <h3> Planets: Everything you need to know! </h3>
            </Col>
          </Row>
        </Jumbotron>
          <p>Planet: {this.state.planetName}</p>
          <p>Climate: {this.state.planet.climate}</p>
          <p>Gravity: {this.state.planet.gravity}</p>


        <form onSubmit={this.handleSubmit} >
          <input 
          onChange={this.handleChange}
          value={this.state.searchName}
          />

          <label>Find another planet</label>
             <select value={this.state.searchName} onChange={this.handleChange}>
               <option value="Alderaan">Alderaan</option>
               <option value="Hoth">Hoth</option>
               <option value="Bespin">Bespin</option>
               <option value="Endor">Endor</option>
             </select>

           <button>
            Get Another Planet
          </button>
        </form>
        </Grid>
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
