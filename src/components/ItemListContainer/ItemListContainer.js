import React from 'react'
import './ItemListContainer.css'

const ItemListContainer = ({greeting}) => {
    return (
        <div className="itemContainer">
            <h2>{greeting}</h2>
        </div>
    )
}

export default ItemListContainer
