import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  constructor() {
    super();
    // crear una referencia al elemento textInput
    this.textInput = React.createRef();
    this.state = {
      name: 'Christian',
    };
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  componentDidMount() {
    this.setState({
      name: 'Marcelo',
    });
  }

  focusTextInput() {
    this.textInput.current.focus();
  }

  render() {
    const buttonStyle = {
      backgroundColor: 'gray',
      border: '1px solid black',
    };

    return (
      <div className="Home">
        <h1>Hola {this.state.name}</h1>
        <input type="text" ref={this.textInput} aria-label="first name" />
        <p>
          Este es un componente de React con estilos{' '}
          <a href="https://tekhne.info/elearning/">Plataforma de Elearning</a>
        </p>
        <p>
          <button type="button" style={buttonStyle} onClick={this.focusTextInput}>
            Click me!
          </button>
        </p>
      </div>
    );
  }
}

export default Home;
