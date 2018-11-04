import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1 className="title"> Syniture </h1>
        </header>
        <h1 className="slogan"> Transforming your ideas.</h1>
        <h1 className="subtitle"> Saving you Time. </h1>
        <button className="button"> Let's Start</button>

        <footer className="footer"></footer>
      </div>
    );
  }
}

export default App;
