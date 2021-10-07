
import React from 'react';
import { Link } from 'react-router-dom';


function Item({product}){
    /*const {name, pictureUrl, stock} = props.props;*/


    return (
        <div className="cardMargin">
            <div className="card">
                <img src={product.pictureUrl} className="card-img-top" alt={product.name}></img>
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p>Disponibles: {product.stock}</p>    
                </div>
                <Link to={`/item/${product.id}`} className="btn btn-primary">
                    Ver más
                </Link>       
            </div>
        </div>
    )
}

export default Item;