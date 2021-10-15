import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import './Item.css'

const Item = ({id, name, stock, img, setItems, items}) => {

    return (
        <div className="card" style={{width:"13 rem"}}>
            <img src={img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                {/* <p className="card-text">Descripcion</p>
                <p className="card-text">Stock: {stock}</p> */}
                <Link className="btn btn-primary" to={'/tienda/item/${id}'}>Mas Info</Link>
                {/* <ItemCount stock={stock} setItems={setItems} items={items} /> */}
                {/* Item count  lo agrego aca */}
                {/* <div className="w-100 d-flex">
                    <button className="btn btn-outline-secondary" onClick = {() => rmCount()}>-</button>
                        <span>{count}</span>
                    <button className="btn btn-outline-secondary" onClick = {() => addCount()}>+</button>
                </div> */}
                {/* <a href="#" className="btn btn-primary" onClick={()=>addItem()}>Add</a> */}
            </div>
    </div>
    )
}

export default Item
