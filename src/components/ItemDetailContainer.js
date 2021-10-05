import { Modal, Button } from 'react-bootstrap';
import { useState } from 'react';
import ItemDetail from './ItemDetail.js';

const ItemDetailContainter = (props) => {
    const [show, setShow] = useState(false);
    const manejadorClose = () => setShow(false);
    const manejadorShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={manejadorShow} style={{width: '100%'}}>
                Ver Más
            </Button>
            <Modal show={show} onHide={manejadorClose}>
                <ItemDetail props={props.props} />
            </Modal>
        </>
    );
};

export default ItemDetailContainter;