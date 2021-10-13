import React from 'react'

const ItemDetail = ({item}) => {
   
    console.log("ESTE ES EL Item " + item)

    return (
        <div className="card" style={{width:"13 rem"}}>
            {/* <img src={mostrarItem.img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{mostrarItem.name}</h5>
                <p className="card-text">Descripcion</p>
                <p className="card-text">Stock: {stock}</p>
            </div> */}
    </div>
    )
}

export default ItemDetail
