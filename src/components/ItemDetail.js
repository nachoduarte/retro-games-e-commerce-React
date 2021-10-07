
import ItemCount from './ItemCount.js';

const ItemDetail = ({producto}) => {
        /*const { id, name, description, price, pictureUrl, stock } = props.props;*/

        const product = {
            stock: producto.stock,
            initial: 1,
            onAdd: (stock, cantidad) =>{
                alert(`Se agregarán ${cantidad} unidades al carrito`)
                return stock - cantidad;
            },
            precio: producto.price,
        };


        return(
            <>
                <div className="card">
                    <img src={producto.pictureUrl} className="card-img-top" alt={producto.name} width="100%" />
                    <div className="card-body">
                        <div>
                            <h5 className="card-title">{producto.name}</h5>
                            <span className="badge bg-success" style={{ textAlign: "center" }}>
                                Id: {producto.id}
                            </span>
                            <br />
                            <span>{producto.description}</span>
                            <br />
                            <span className="badge bg-secondary">
                                Precio: ${producto.price}
                            </span>
                        </div>
                        <ItemCount props={product} />
                    </div>
                </div>
            
            </>
        );

};

export default ItemDetail;