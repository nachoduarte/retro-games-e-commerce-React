import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import './styles/main.css'; 
import NavBar from'./components/NavBar.js';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
        

      </header>

      <main>
      <img src={logo} className="App-logo" alt="logo" />
        <p>
          proyecto e-commerce website - Retro Games - Juan Ignacio Duarte.
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </main>
    </div>
  );
}

export default App;
