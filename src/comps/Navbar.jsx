import '../styles/Navbar.scss'
import logo from '../imgs/logozen.png'

export default function Navbar() {
  return (
    <div className="navbar-body container-fluid d-flex flex-row align-items-center justify-content-center">
      <img src={logo} alt='error'></img>
    </div>
  );
}
