import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemListContainer.css'

const ItemListContainer = ({greeting}) => {
    return (
        <div className="itemContainer">
            <h2>{greeting}</h2>
            <ItemCount stock= {5} initial={1}/>
        </div>
    )
}

export default ItemListContainer
