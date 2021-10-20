import React, { useState } from "react";
import { Link } from 'react-router-dom';



function ItemCount({stock, initial, onAdd}) {
    

    const [contador, setContador] = useState(initial);

    const add = () => {
        contador < stock ? 
        setContador(contador + 1)
        : alert("No hay mas stock disponible!");
    };

    const substract = () => {
        contador > initial ?
        setContador(contador - 1)
        : console.log("se supero el minimo");
    };
    
    
    /*const [isEstado, setEstado] = useState(true);

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
    }*/

    
    

    return <>
            
            <div>
                <div className="itemButtons">
                    <button href="" className="btn btn-danger" onClick={substract}>-</button>
                    <input type="text" className="form-control text-center" placeholder="cantidad" aria-label="Username" aria-describedby="basic-addon1" value={contador} id="input" />
                    <button href="" className="btn btn-danger" onClick={add}>+</button>
                </div>
                {contador > 0 ? (
                    <button onClick={() => onAdd(contador)}
                    type="button"
                    className="btn btn-primary container-fluid mt-2">
                        Agregar al carrito
                    </button>
                ) : (
                    console.log("no hay objetos seleccionados")
                )}
            </div> 
        </>
}

export default ItemCount;