import logo from "../images/FantasyRetroLogo.svg";
import '../styles/main.css';

function NavBar() {
    return <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid navbarDisplay">
                <a className="logoDisplay" href="#">
                    <img src={logo} width="100%"></img>
                </a>
                <div>
                    <ul className="navbar-nav">
                        <li className="nav-button">
                            <a className="nav-a fontReg"  href="#">Inicio</a>
                        </li>
                        <li className="nav-button">
                            <a className="nav-a fontReg" href="#">Tienda</a>
                        </li>
                        <li className="nav-button">
                            <a className="nav-a fontReg" href="#">Carrito</a>
                        </li>
                    
                    </ul>
                </div>
            </div>
        </nav>


    </>
}

export default NavBar;