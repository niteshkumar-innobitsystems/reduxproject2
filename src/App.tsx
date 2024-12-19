import React from 'react';
// import logo from './logo.svg';
import './App.css';
import View from './pages/view';
import Register from "./pages/login"

function App() {
  return (
    <div className="App">
      <Register/>
      <View/>
      <header className="App-header">
        <img  className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
  );
}

export default App;
