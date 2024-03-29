import React, { Component } from 'react';
import './App.css';
import  AboutUs  from "./components/about_us";
import  NavBar  from "./components/nav";

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />
        <header className="App-header">          
          <p>
            Edit <code>src/App.js</code> and save to reload.
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
        <AboutUs />
      </div>
    );
  }
}

export default App;
