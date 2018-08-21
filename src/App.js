import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1 className="title">Zoltan Almodo - Portfolio</h1>
        </header>
        <p className="content">
          Welcome!
        </p>
        <div className='content-stripe'>
          <h1 className='content-title'>
            - Bio
          </h1>
        </div>
        <p className="content">
          txt
        </p>
        <div className='blue'>
          <h1 className='content-title'>
            - LinkedIn
            - CV
            - Portfolio
          </h1>
        </div>
        <p className="content">
          txt
        </p>
      </div>
    );
  }
}

export default App;
