import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import './styles/main.css'; 
import NavBar from'./components/NavBar.js';
import BannerCarousel from './components/BannerCarousel.js';
import ItemListContainer from './components/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer.js'; 

function App() {
  
  return (

    <Router>
    <div className="App">
      <header>
        <NavBar />
        

      </header>

      <main>
        <BannerCarousel />
        <Switch>
          <Route exact path="/">
              <ItemListContainer  />
          </Route>
          
          <Route exact path="/category/:id">
              <ItemListContainer  />
          </Route>

          <Route exact path="/item/:id">
            <ItemDetailContainer  />
          </Route>
        </Switch>
      </main>
    </div>
    </Router>
    
  );
}

export default App;
