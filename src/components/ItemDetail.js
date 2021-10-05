import {Modal, Card } from 'react-bootstrap';
import ItemCount from './ItemCount.js';

const ItemDetail = (props) => {
        const { id, name, description, price, pictureUrl, stock } = props.props;

        const product = {
            stock: stock,
            initial: 1,
            onAdd: (stock, cantidad) =>{
                alert(`Se agregarán ${cantidad} unidades al carrito`)
                return stock - cantidad;
            },
            precio: price,
        };
        return(
            <>
            <Modal.Header closeButton>
                <Modal.Title>{name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Card>
                    <Card.Img variant="top" src={pictureUrl} width="80%" />
                    <Card.Body>
                        <Card.Text>
                            <span className="badge bg-success" style={{ textAlign: "center" }}>
                                Id: {id}
                            </span>
                            <br />
                            <span>{description}</span>
                            <br />
                            <span className="badge bg-secondary">
                                Precio: ${price}
                            </span>
                        </Card.Text>
                        <ItemCount props={product} />
                    </Card.Body>
                </Card>
            </Modal.Body>
            </>
        );

};

export default ItemDetail;