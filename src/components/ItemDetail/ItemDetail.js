import React from 'react'
import { useParams } from 'react-router'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({item, items, setItems}) => {

    console.log("Recibo este array:_", item)
    
    
    return (
        <div className="card" style={{width:"13 rem"}}>
            <img src={item.img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Descripcion: {item.desc}</p>
                <p className="card-text">Stock: {item.stock}</p>
            </div>
            <ItemCount items={items} setItems={setItems}/>            
    </div>
    )
}

export default ItemDetail
