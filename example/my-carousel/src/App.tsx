import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Simplecarousel } from '@arranjae/react-simple-carousel';
import '@arranjae/react-simple-carousel/src/styles.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>

      <Simplecarousel
        list={[
          {
            content: (
              <div className="box-item">
                <h1>Box Item 1</h1>
                <p>Box in my carousel</p>
              </div>
            ),
          },
          {
            content: (
              <div className="box-item">
                <h1>Box Item 2</h1>
                <p>Box in my carousel</p>
              </div>
            ),
          },
          {
            content: (
              <div className="box-item">
                <h1>Box Item 3</h1>
                <p>Box in my carousel</p>
              </div>
            ),
          },
          {
            content: (
              <div className="box-item">
                <h1>Box Item 4</h1>
                <p>Box in my carousel</p>
              </div>
            ),
          },
        ]}
      />
    </div>
  );
}

export default App;
