import React from 'react';
import Item from './Item.js';

const ItemList = ({ productos }) => {

    console.log(productos);
    return (
      <div className="listContainerDisplay">
        {productos.length !== 0 ? (
          productos.map((producto) => (
            <Item product={producto} key={producto.id} />
          ))
        ) : (
            <div className="spinner-border text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
            </div>
        )}
      </div>
    );
  };



/*const ItemList = ({productos}) => {

    useEffect(() =>{
        if (productos.length !== 0){
            
                productos.map((element, index) => <Item producto={element} key={index} />)
            ;
        }
    });

    return (
        <div className="listContainerDisplay">
            {productos.length !== 0 ? (
                productos.map((element, index) => (
                    <Item producto={element} key={index} />
                ))
            ) : (
                <div className="spinner-border text-danger" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            )}
        </div>
    )
}
*/
export default ItemList;