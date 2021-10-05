import React from 'react';
import ItemDetailContainer from './ItemDetailContainer.js';


const Item = (props) => {
    const {name, pictureUrl, stock} = props.props;


    return (
        <div className="cardMargin">
            <div className="card">
                <img src={pictureUrl} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p>Disponibles: {stock}</p>    
                </div>
                <ItemDetailContainer props={props.props} />
            </div>
        </div>
    )
}

export default Item;