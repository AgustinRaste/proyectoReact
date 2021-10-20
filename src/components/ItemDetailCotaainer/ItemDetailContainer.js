import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router'
import './ItemDetailContainer.css'

const ItemDetailContainer = ({items, setItems}) => {

    const {id} = useParams()


    let itemsArr = new Array({id:0, name:"iPhone 12", desc:"Telefono celular marca Apple, modelo iPhone 12", stock:5, img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-gallery2-2021_FMT_WHH?wid=750&hei=778&fmt=jpeg&qlt=80&.v=1617122869000"},
    {id:1, name:"Galaxy Note20 Ultra", desc:"Telefono celular marca Samsung, modelo Galaxy Note 20 Ultra", stock:7 , img:"https://m.media-amazon.com/images/I/51jomkh3CFS._AC_SX522_.jpg"},
    {id:2, name:"Google Pixel 6", desc:"Telefono celular marca Google, modelo Pixel 6", stock:12, img:"https://i.blogs.es/66dc13/pixel-6-pro/450_1000.jpeg"},
    {id:3, name:"Mate de Messi", desc:"Mate de madera con detalles metalicos en alpaca", stock:10, img:"https://www.65ymas.com/uploads/s1/25/66/10/bigstock-traditional-argentinian-yerba-326966854_1_621x621.jpeg"})


    console.log("Id que recibo en el container:_", id)


    const [itemState, setItemState] = useState({id:"", name:"", desc:"", stock:"", img:""})
    // Inicializo el state de esta manera porque si no me da un error al intentar sacar propiedades
    // de un null en el ItemDetail
    
    
    const getItem = () => {
        new Promise((resolve, reject) => {
             setTimeout(() => {
                 resolve(itemsArr[id])}, 2000);
         }).then((res) => {
     setItemState(res)
     })
    }


    useEffect(() => {
        getItem()
      }, [])
    

    return (
        <div className="detailContainer">
            <ItemDetail item={itemState} items={items} setItems={setItems}/>
        </div>
    )
}

export default ItemDetailContainer
