import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import './styles/main.css'; 
import NavBar from'./components/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js';


function App() {
  
  return (
    
    <div className="App">
      <header>
        <NavBar />
        

      </header>

      <main>
        <ItemListContainer texto={"Aún estamos cargando los productos!"} />
        
      </main>
    </div>
    
  );
}

export default App;
