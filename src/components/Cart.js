import React from 'react';
import { Button, Container, ListGroup } from 'react-bootstrap';
import { CartContextUse } from './CartContext';
import { Link } from 'react-router-dom';

const Cart = () =>{
    const { clear, removeItem, cart } = CartContextUse();

    return (
        <Container>
            <div className="d-flex align-items-center flex-column">
                <h3 className="text-center mt-5">Carrito</h3>
                {cart.map((element) =>{
                    return (
                        <>

                        <ListGroup horizontal className="mt-3">
                            <ListGroup.Item><img src={element.item.pictureUrl} className="w-25"></img></ListGroup.Item>
                            <ListGroup.Item>{element.item.name}</ListGroup.Item>
                            <ListGroup.Item>{element.item.price}</ListGroup.Item>
                            <ListGroup.Item>{element.item.description}</ListGroup.Item>
                            <ListGroup.Item>Seleccionados: {element.quantity}</ListGroup.Item>
                            <Button onClick={() => removeItem(element.item.id)}>Quitar Producto</Button>
                        </ListGroup>
                        </>
                    );
                })}
                    {cart.lenght > 0 ?
                        <Button onClick={clear} className="w-25 mt-5" variant="warning">
                            Vaciar Carrito
                        </Button> : <h5>El carrito esta vacio </h5> }
                        <Link to="/" className="btn btn-primary mt-3 w-25">
                            Volver a la tienda
                        </Link>                        
            </div>
        </Container>
    );
};

export default Cart;