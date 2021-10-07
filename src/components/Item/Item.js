import React, {useState} from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './Item.css'

const Item = ({name, stock, img, setItems, items}) => {

    const addItem = () =>{
        setItems(items+count)
    }



    const [count, setCount] = useState(1)
    // Funcion para sumar 1 al contador
    function addCount(){
        setCount(count+1)
    }
    // Funcion para restar 1 al contador
    function rmCount(){
        setCount(count-1)
    }

    if(count > stock){
        alert("No hay mas stock")
        setCount(stock)
        // Esta ultima linea es para que, en caso de llegar a ahcer un click antes de que salte la alerta
        // el valor del contador queda igual al del stock
    }

    if(count < 1){
        alert("NO SE PUEDEN TENER CANTIDADES MENORES A " + 1)
        setCount(1)
    }

    return (
        <div className="card" style={{width:"13 rem"}}>
            <img src={img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Descripcion</p>
                <p className="card-text">Stock: {stock}</p>
                {/* Item count  lo agrego aca */}
                <div className="w-100 d-flex">
                    <button className="btn btn-outline-secondary" onClick = {() => rmCount()}>-</button>
                        <span>{count}</span>
                    <button className="btn btn-outline-secondary" onClick = {() => addCount()}>+</button>
                </div>
                <a href="#" className="btn btn-primary" onClick={()=>addItem()}>Add</a>
            </div>
    </div>
    )
}

export default Item
