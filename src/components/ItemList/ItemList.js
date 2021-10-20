import React from 'react'
import Item from '../Item/Item'

const ItemList = ({itemsArr, setItems, items}) => {
    return (
        <div className="container p-3 d-flex">
            <itemList itemsArr={itemsArr}/>
            {itemsArr && itemsArr.map((item => (<Item id={item.id}
                                                name={item.name}
                                                stock={item.stock}
                                                img={item.img}
                                                items={items}
                                                setItems={setItems}
                                                />)))

            }
        </div>
    )
}

export default ItemList
