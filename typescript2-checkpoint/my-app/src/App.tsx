import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Greeting from './components/Greeting';

function App() {
  return (
    <div className="App">
      <Counter />
      <Greeting />
    </div>
  );
}

export default App;
