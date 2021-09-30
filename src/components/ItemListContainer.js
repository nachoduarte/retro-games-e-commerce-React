import {useState, useEffect} from 'react';
import ItemList from './ItemList.js';
import consoles from './data/consoles.json';


const ItemListContainer = (props) => {
    const {texto} = props;

    const [itemList, setitemList] = useState(0);

    useEffect(() =>{
        const getData = new Promise((resolve, reject) =>{
            setTimeout(function(){
                resolve(consoles);
            }, 2000);
        });

        getData.then((response) =>{
            setitemList(response);
        });
    }, []);


    return <>
        <p className="fontReg mainTextColor">{texto}</p>
        <div>
            <ItemList items={itemList} />
        </div>

    </>
}

export default ItemListContainer;