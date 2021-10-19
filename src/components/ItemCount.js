import React, { useState } from "react";
import { Link } from 'react-router-dom';



function ItemCount({stock, initial, onAdd}) {
    
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
    

    function onTrigger(){
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
    

    return <>
            {isEstado ?
            <div>
                <div className="itemButtons">
                    <a href="" className="btn btn-danger" onClick={handleRemove}>-</a>
                    <input type="text" className="form-control text-center" placeholder="cantidad" aria-label="Username" aria-describedby="basic-addon1" value={contador} id="input" />
                    <a href="" className="btn btn-danger" onClick={handleAdd}>+</a>
                </div>
                <button className="btn btn-primary" onClick={() =>{
                                                             onAdd(parseInt(contador));
                                                             onTrigger()}}>Agregar al carrito</button>
            </div> 
            :
            <div className="row">
                <div className="col-12">
                    <Link to="/cart" className="btn btn-success form-control" href="/cart">Ir al carrito</Link>
                </div>
            </div>
        }
       

    </>
}

export default ItemCount;