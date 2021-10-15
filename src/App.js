
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import './styles/main.css'; 
import NavBar from'./components/NavBar.js';
import BannerCarousel from './components/BannerCarousel.js';
import ItemListContainer from './components/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer.js'; 
import CartContainer from './components/CartContainer.js';
import CartContextProvider from './components/CartContext.js';

function App() {
  
  return (
    <CartContextProvider>
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
          <Route exact path="/cart">
            <CartContainer />
          </Route>
        </Switch>
      </main>
    </div>
    </Router>
    </CartContextProvider>
  );
}

export default App;
