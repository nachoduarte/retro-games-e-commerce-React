import { Link, useParams } from 'react-router-dom';
import logo from "../images/FantasyRetroLogo.png";
import '../styles/main.css';
import CartWidget from './CartWidget.js';

function NavBar() {

    

    return <>
    
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid navbarDisplay">
                <Link to="/" className="logoDisplay">
                    <img src={logo} width="300px" alt="logo"></img>
                </Link>
                <div>
                    <ul className="navbar-nav menuDisplay">
                        <li className="nav-button">
                            <Link to={`/category/1`} className="nav-a fontReg"  >Consolas</Link>
                        </li>
                        <li className="nav-button">
                            <Link to={`/category/2`} className="nav-a fontReg" >Videojuegos</Link>
                        </li>
                        <li className="nav-button">
                            <Link to={`/category/3`} className="nav-a fontReg" >Joysticks</Link>
                        </li>
                        <li className="nav-button">
                            <a className="nav-a fontReg" href="#">
                                <CartWidget />
                            </a>
                        </li>
                    
                    </ul>
                </div>
            </div>
        </nav>

    </>
}

export default NavBar;