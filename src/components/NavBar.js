import logo from "../images/FantasyRetroLogo.svg";
import '../styles/main.css';
import CartWidget from './CartWidget.js';

function NavBar() {
    return <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid navbarDisplay">
                <a className="logoDisplay" href="#">
                    <img src={logo} width="80%"></img>
                </a>
                <div>
                    <ul className="navbar-nav menuDisplay">
                        <li className="nav-button">
                            <a className="nav-a fontReg"  href="#">Inicio</a>
                        </li>
                        <li className="nav-button">
                            <a className="nav-a fontReg" href="#">Tienda</a>
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