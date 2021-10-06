import React, {useState} from 'react'
import './ItemCount.css'

const ItemCount = ({stock, initial}) => {
    const [count, setCount] = useState(initial)
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

    if(count < initial){
        alert("NO SE PUEDEN TENER CANTIDADES MENORES A " + initial)
        setCount(initial)
    }
    return (
        <div className="divCount">
            {/* <h4>Esto es un div para pruebas</h4>
            <h3>Nombre: {name}</h3>
            <h3>Nombre dinamico: {nombre}</h3>
            <button onClick={()=> setName("Julio Cesar")}>Cambiar a Julio Cesar</button>
            <button onClick={()=> setName("Juan Carlos")}>Cambiar a Juan Carlos</button> */}
            <div className = "count">
                <button onClick = {() => addCount()}>+</button>
                <h1>{count}</h1>
                <button onClick = {() => rmCount()}>-</button>
                
            </div>
        </div>
    )
}


export default ItemCount
