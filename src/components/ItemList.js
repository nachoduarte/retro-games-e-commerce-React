import React, { useState, useEffect } from 'react';
import Item from './Item.js';


function ItemList (props) {
    const { items } = props;

    const [products, setProducts] = useState(0);

    const maxValue = typeof items.length === 'undefined' ? 0 : items.length;

    useEffect(() =>{
        if (maxValue > 0){
            setProducts(
                items.map((element, index) => <Item props={element} key={index} />)
            );
        }
    }, [maxValue, items]);

    return <>
        {products ? (
            <div className="listContainerDisplay">{products}</div>
        ) : (
                <div className="spinner-border text-danger" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
        )}
    </>

}

export default ItemList;