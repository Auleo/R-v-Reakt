import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyBox from './MyBox/MyBox';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyBox></MyBox>
        <MyBox></MyBox>
        <MyBox></MyBox>
        <MyBox></MyBox>
        <MyBox></MyBox>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button buttonText={'Przycisk w App'}> </Button>
        
      </header>
    </div>
  );
}

export default App;
