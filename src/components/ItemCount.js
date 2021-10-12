import { useState } from "react";


function ItemCount(props) {
    //Desestructuracion de props
    const {stock, initial, onAdd, carritoProductos} = props.props;

    //Hooks y variables
    const [cantidad, setCantidad] = useState(initial);
    const [actualStock, setActualStock] = useState(stock);
    const [carrito, setCarrito] = useState(carritoProductos);
    
    
    

    const add = () => {
        if (cantidad <= stock - 1) {
            setCantidad(cantidad + 1);
        }
    };

    const remove = () => {
        if (cantidad > initial) {
            setCantidad(cantidad - 1);
        }
    };


    return <>
        <div>
            <p>Cantidad Disponible: {actualStock}</p>
            <div className="itemButtons">
                <button className="btn btn-danger" onClick={remove}>-</button>
                <p>{cantidad}</p>
                <button className="btn btn-danger" onClick={add}>+</button>
            </div>
            <button className="btn btn-primary" onClick={() =>{
                
                setCarrito(carrito, cantidad);
                console.log(carritoProductos);
                actualStock >= cantidad &&
                setActualStock(onAdd(actualStock, cantidad));
                cantidad > actualStock &&
                alert ("No queda mas stock del producto seleccionado");
            }}>Agregar al carrito</button>
        </div>


    </>
}

export default ItemCount;