import React from 'react';
import logo from './logo.svg';
import './App.css';

type State = {
  response: object | null
};

export class App extends React.Component<{}, State> {
  state = {
    response: null
  }

  componentDidMount() {
    fetch("https://pravegapredictor.herokuapp.com/personalDialog")
        .then(response => response.json())
        .then(response => this.setState(() => ({
          response
        })))
  }

  render() {
    return (
        <div>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                {this.state.response ?
                    JSON.stringify(this.state.response) :
                    "Edit and save to reload."
                }
              </p>
              <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </div>
        </div>
    );
  };
}

export default App;
