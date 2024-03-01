import App from './App';
import './NavBar.css';

function NavBar() {
  return (
    <div className="NavBar">
    <a href="#title">NavBar</a>
      <a class="active" href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </div>
  )
}
export default NavBar;