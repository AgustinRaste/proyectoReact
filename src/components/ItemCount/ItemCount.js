import React, {useState} from 'react'
import './ItemCount.css'

const ItemCount = ({stock, setItems, items}) => {
    
    
    
    const [count, setCount] = useState(1)
    // Funcion para sumar 1 al contador
    function addCount(){
        if(count >= stock){
            alert("No hay mas stock")
        }else{
            setCount(count+1)
        }
    }
    // Funcion para restar 1 al contador
    function rmCount(){
        if(count == 1){
            alert("NO SE PUEDEN TENER CANTIDADES MENORES A " + 1)
        }else{
            setCount(count-1)
        }
        
    }

    const addItem = () =>{
        setItems(items + count)
    }

   
    return (
        <div className="divCount">
            
            <div className="w-100 d-flex">
                    <button className="btn btn-outline-secondary" onClick = {() => rmCount()}>-</button>
                        <span>{count}</span>
                    <button className="btn btn-outline-secondary" onClick = {() => addCount()}>+</button>
                    <a href="#" className="btn btn-primary" onClick={()=>addItem()}>Add</a>
            </div>
        </div>
    )
}


export default ItemCount
