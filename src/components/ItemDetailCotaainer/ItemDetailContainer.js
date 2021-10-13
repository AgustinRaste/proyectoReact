import React, {useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = ({itemsArr}) => {


    const [itemFound, setItemFound] = useState(null)
    
    
    const getItem = () =>{
        let buscarId = parseInt(prompt("Ingrese el id a buscar"));  
        setItemFound(itemsArr.filter(item => item.id == buscarId))
    }


    console.log(itemFound)
    
    return (
        <div>
            <ItemDetail item={itemFound}/>
            <button className="btn btn-outline-secondary" onClick = {() => getItem()}>Buscar Item</button>

        </div>
    )
}

export default ItemDetailContainer
