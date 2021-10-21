
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail.js';
import {firestore} from '../firebase/index.js';
import consoles from './data/consoles.json';


function ItemDetailContainter(){

    const [producto, setProducto] = useState({});
    const {id: idProduct} = useParams();




    /*
    useEffect(() => {

    
    const db = firestore

    const coleccion = db.collection("consoles")
    const consulta = coleccion.get()

    consulta.then((res) => {
        console.log(res.docs)
        res.docs.forEach(producto =>{
            const productoFinal = {
                id: producto.id,
                ...producto.data()
            }
            if (productoFinal.id === id) {
                setProducto(productoFinal)
            }
            console.log(producto)
        })
    })
}, [id])

    */
    const getData = () => {
        return new Promise((resolve, reject) => {
            const buscarProducto = consoles.find(
                (item) => item.id === parseInt(idProduct)
            );
            setTimeout(() => {
                resolve(buscarProducto);
                reject("error");
            }, 500);
        });
    };

    useEffect(() =>{
        setProducto({});
        getData()
            .then((resolve) => setProducto(resolve))
            .catch((error) => console.log(error));
    }, [idProduct]);   

    return (
        <>
            <ItemDetail producto={producto} />
        </>
    );
};

export default ItemDetailContainter;