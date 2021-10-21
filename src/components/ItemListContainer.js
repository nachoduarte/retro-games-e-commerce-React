import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList.js';
import { firestore } from '../firebase/index.js';
import consoles from './data/consoles.json';


function ItemListContainer(){

    const [productos, setProductos] = useState([]);
    const { id: idCategory } = useParams();
    console.log(idCategory);

    
    useEffect(() =>{

    
    const db = firestore;

    const coleccion = db.collection("consoles")

    if (idCategory === undefined) {
        const consulta = coleccion.get()
        consulta.then((res) => {
            const ArrayProductos = []
            res.docs.forEach(producto => {
                const productoFinal = {
                    id: producto.id,
                    ...producto.data()
                }
                ArrayProductos.push(productoFinal)
            })
            console.log(ArrayProductos);
            setProductos(ArrayProductos)
        })
    } else {
        const consulta = coleccion.where('categoria', '==', idCategory).get()
        consulta.then((res) => {
            const ArrayProductos = []
            res.docs.forEach(producto =>{
                const productoFinal = {
                    id: producto.id,
                    ...producto.data()
                }
                ArrayProductos.push(productoFinal)
            })
            console.log(ArrayProductos)
            setProductos(ArrayProductos)
          })
        }
    }, [idCategory])

    /*
    const getData = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (idCategory) {
                    const filtroCategory = consoles.filter(
                        (item) => item.categoria === idCategory
                    );
                    resolve(filtroCategory);
                } else {
                    resolve(consoles);
                }

                reject("error al cargar productos");
            }, 2000);
        });
    };

    useEffect(() =>{
        setProductos([]);
        getData()
            .then((response) => setProductos(response))
            .catch((error) => console.log(error));
    }, [idCategory]);*/


    return <>
        
        <div className="listContainerFather">
            <ItemList productos={productos} />
        </div>

    </>
}

export default ItemListContainer;