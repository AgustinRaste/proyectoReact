import React from 'react'
import Item from '../Item/Item'
import ItemCount from '../ItemCount/ItemCount'
import './ItemListContainer.css'

const ItemListContainer = ({greeting, items, setItems, itemsList}) => {
    // const itemsArr = [{id:0, name:"iPhone 12", stock:5, img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-gallery2-2021_FMT_WHH?wid=750&hei=778&fmt=jpeg&qlt=80&.v=1617122869000"},
    //                 {id:1, name:"Galaxy Note20 Ultra", stock:7, img:"https://m.media-amazon.com/images/I/51jomkh3CFS._AC_SX522_.jpg"},
    //                 {id:2, name:"Google Pixel 6", stock:12, img:"https://i.blogs.es/66dc13/pixel-6-pro/450_1000.jpeg"},
    //                 {id:3, name:"Mate de Messi", stock:10, img:"https://www.65ymas.com/uploads/s1/25/66/10/bigstock-traditional-argentinian-yerba-326966854_1_621x621.jpeg"} ]
    
    console.log("valor de result:")
    console.log(itemsList)

    let itemsArr = itemsList

    console.log(itemsArr)
    return (

        <div className="container p-3 d-flex">
            {itemsArr && itemsArr.map((item => (<Item key={item.id}
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

export default ItemListContainer
