import React from 'react';
import ItemCount from './ItemCount.js';


const Item = (props) => {
    const {id, name, description, price, pictureUrl, stock} = props.props;

    const product = {
        stock: stock,
        initial: 1,
        onAdd: (stock, cantidad) => {
            alert(`Se agregarán ${cantidad} unidades al carrito`)
            return stock - cantidad;
        },
        precio: price,
    };

    return (
        <div className="cardMargin">
            <div className="card">
                <img src={pictureUrl} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{id}: {name}</h5>
                    <p className="card-text">{description}</p>
                    <h6 className="card-text">$: {price}</h6>
                    
                </div>
                <ItemCount props={product} />
            </div>
        </div>
    )
}

export default Item;