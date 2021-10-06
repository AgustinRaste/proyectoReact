import React, {useState} from 'react'
import './Pruebas.css'




const Pruebas = ({stock, initial}) => {

    // const [state, setState] = useState({
    //     name:"Pablo",
    //     surname:"Puglitellicci",
    //     edad: 19
    // })

    // let {name, surname, edad} = state
    // const [nombre, setName] = useState("John Fox")

    let defaultValueCount = parseInt(initial)
    // el valor de initial viene como string por eso lo convierto a int 

    const [count, setCount] = useState(defaultValueCount)

    function addCount(){
        setCount(count+1)
    }

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
        <div className="divPruebas">
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

// A TENER EN CUENTA!
// Si quiero mantener los  valores del state debo pasar la copia del objeto al setState con spred operators
// ya que si no hago eso, el resto de las propiedades se eliminan

export default Pruebas
