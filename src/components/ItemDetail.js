
import React, {useState} from 'react';
import ItemCount from './ItemCount.js';
import {CartContextUse} from './CartContext.js';

const ItemDetail = ({producto}) => {
        const { id, name, description, price, pictureUrl, stock } = producto;

        const { addItem } = CartContextUse();

        const onAdd = (qty) => {
            addItem(producto, qty);
        }
        

      /*  const product = {
            id: id,
            name: name,
            stock: stock,
            initial: 1,
            onAdd: (stock, cantidad) =>{
                alert(`Se agregarán ${cantidad} unidades al carrito`)
                return stock - cantidad;
            },
            precio: price,
            carritoProductos: carritoProductos,
        };*/


        return(
            <>
                <div className="card">
                    <img src={pictureUrl} className="card-img-top" alt={name} width="100%" />
                    <div className="card-body">
                        <div>
                            <h5 className="card-title">{name}</h5>
                            <span className="badge bg-success" style={{ textAlign: "center" }}>
                                Id: {id}
                            </span>
                            <br />
                            <span>{description}</span>
                            <br />
                            <span className="badge bg-secondary">
                                Precio: ${price}
                            </span>
                        </div>
                        
                        <ItemCount stock={stock} initial="1" onAdd={onAdd}  />
                                               
                    </div>
                </div>
            
            </>
        );

};

export default ItemDetail;