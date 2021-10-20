import React, {useState} from 'react';
import { Card, Container, Spinner } from 'react-bootstrap';
import ItemCount from './ItemCount.js';
import { Link } from 'react-router-dom';
import {CartContextUse} from './CartContext.js';

const ItemDetail = ({producto}) => {
        const { name, description, price, pictureUrl, stock } = producto;

        const { addItem, cart } = CartContextUse();

        const onAdd = (qty) => {
            addItem(producto, qty);
        }
        

        return(
                <Container className="d-flex justify-content-center">
                    {(name, pictureUrl, description, price, stock) ? (
                        <Card style={{ width: "18rem"}} className="text-center me-4 mt-3">
                            <Card.Img variant="top" className="mt-3 ps-3 pe-3" src={pictureUrl} />
                            <Card.Body>
                                <Card.Title>
                                    <h4>{name}</h4>
                                </Card.Title>
                                <Card.Text>{description}</Card.Text>
                                <h5>${price}</h5>
                                <ItemCount stock={stock} initial={0} onAdd={onAdd} />
                                {cart.length > 0 ? (
                                    <div>
                                        <Link to="/cart" className="btn btn-primary m-3">
                                            Ir al carrito
                                        </Link>
                                    </div>
                                ) : (
                                    console.log("carrito vacio")
                                )}
                                <Link className="btn btn-secondary" to="/">
                                    Volver
                                </Link> 
                            </Card.Body>
                        </Card>
                    ) : (
                        <Spinner animation="border" variant="danger" />
                    )}
                </Container>                
        );
};

export default ItemDetail;