import React, { Component } from 'react';
import {Row,Col,Jumbotron} from 'react-bootstrap';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { items: [], text: 'green' };
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
                <h3>Star Wars</h3>
                  <Row>
                   <Col xs={2}></Col>
                   <Col xs={2}>
                      <a href="https://github.com/davideliason/favorite-books-react-redux-firebase">Repo</a>
                   </Col>

                   <Col xs={2}></Col>
                    <Col xs={2}>
                      <a href="https://github.com/davideliason/davideliason.github.io">Github Portfolio</a>
                    </Col>
                   <Col xs={2}>
                   </Col>
                 </Row>
              </Jumbotron>

        <TodoList items={this.state.items} />

        <form onSubmit={this.handleSubmit} >
          <input 
          onChange={this.handleChange}
          value={this.state.text}
          />
           <button>
            Add a Todo Item:  #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }
}

class TodoList extends Component{
  render(){
    return (
      <ul>
         {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>

    )
  }
}

export default App;
