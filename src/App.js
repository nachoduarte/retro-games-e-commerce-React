import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import './styles/main.css'; 
import NavBar from'./components/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js';
import ItemCount from './components/ItemCount.js';
import nintendo64 from './images/consoleNintendo64.jpg'

function App() {
  const product = {
    id: 1,
    item: "Consola Nintendo 64",
    stock: 20,
    initial: 1,
    onAdd: (stock, cantidad) => {
      alert(`Se agregarán ${cantidad} unidades al carrito`)
      return stock - cantidad
    },
    precio: 15000,
  };






  return (
    <div className="App">
      <header>
        <NavBar />
        

      </header>

      <main>
        <ItemListContainer texto={"Aún estamos cargando los productos!"} />
        <div className="card">
          <img src={nintendo64} className="card-img-top" alt="..."></img>
          <div className ="card-body">
            <h5 className ="card-title">{product.item}</h5>
            <ItemCount props={product} />
          </div>
        </div>  
      </main>
    </div>
  );
}

export default App;
