import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList.js';
import consoles from './data/consoles.json';


function ItemListContainer(){

    const [productos, setProductos] = useState([]);
    const { id: idCategory } = useParams();


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
    }, [idCategory]);


    return <>
        
        <div className="listContainerFather">
            <ItemList productos={productos} />
        </div>

    </>
}

export default ItemListContainer;