import React, { useState } from "react";



function ItemCount({stock, initial}) {
    
    const [isEstado, setEstado] = useState(true);

    const handleRemove = (e) => {
        e.preventDefault();
        removeOne();
        console.log("resta");
    }
    const handleAdd = (e) => {
        e.preventDefault();
        addOne();
    }
    

    const onAdd = (e, input) => {
        e.preventDefault();
        setEstado();
        console.log("agrega Item a carrito");
    }
    
    function addOne() {
        let resultado = parseInt(contador) + parseInt(1);
        if (resultado <= stock){ 
            setContador(resultado);
        }else{
            alert("no hay stock");
        }
    }

    function removeOne() {
        let resultado = parseInt(contador) - parseInt(1);
        if (resultado >= 1){
            setContador(resultado);
        }
    }

    const [contador, setContador] = useState(initial);
    
    
    
    /*//Desestructuracion de props
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
    };*/


    return <>
            {isEstado ? 
            <div>
                <div className="itemButtons">
                    <a href="" className="btn btn-danger" onClick={handleRemove}>-</a>
                    <input type="text" className="form-control text-center" placeholder="cantidad" aria-label="Username" aria-describedby="basic-addon1" value={contador} id="input" />
                    <a href="" className="btn btn-danger" onClick={handleAdd}>+</a>
                </div>
                <button className="btn btn-primary" onClick={onAdd}>Agregar al carrito</button>
            </div> 
            :
            <div className="row">
                <div className="col-12">
                    <a className="btn btn-success form-control" href="/cart">Ir al carrito</a>
                </div>
            </div>
        }
       

    </>
}

export default ItemCount;