import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';
import logo from "../images/FantasyRetroLogo.png";
import '../styles/main.css';
import CartWidget from './CartWidget.js';
import ItemList from './ItemList.js';
import ItemCount from './ItemCount.js';

function NavBar() {
    return <>
    <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid navbarDisplay">
                <a className="logoDisplay" href="#">
                    <img src={logo} width="300px" alt="logo"></img>
                </a>
                <div>
                    <ul className="navbar-nav menuDisplay">
                        <li className="nav-button">
                            <Link to="/ItemList" className="nav-a fontReg"  >Inicio</Link>
                        </li>
                        <li className="nav-button">
                            <Link to="/ItemCount"className="nav-a fontReg" >Tienda</Link>
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

    </Router>
    </>
}

export default NavBar;