import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar.js';
import Card from './Card.js';

function App() {
  return (
    <div className="App">  
       <NavBar />
        <h1>CS 230L</h1>
        <h2>Section - 02</h2>
        <p>WVU ID: 800387928</p>
        <p>Hi I am Kylie Burke</p>
        <Card />
    </div>
  );
}

export default App;
