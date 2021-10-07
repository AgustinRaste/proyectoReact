import React, {useState} from 'react'
import  {useEffect} from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './Pruebas.css'




const Pruebas = () => {

    const [result, setResult] = useState(null)

    const task = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([{id: 2, name: "iPhone 12", desc:"celular", stock:20},
                    {id: 3, name: "Samsung Note20", desc:"celular", stock:25},
                    {id: 6, name: "Google Pixel 6", desc:"celular", stock:10},
                    {id: 10, name: "iPad Pro", desc:"tablet", stock:28}])
            }, 3000);
    })

    useEffect(() => {
        if(!result){
            task.then((res,err) => {
                console.log("INICIA LA PETICION")
                if (err) console.log(err)
                setResult(res)
            }).catch((error) => {
                console.log(error)
            }).finally(() => console.log("Finalizado"))
        }
        console.log(result)
    }, [result])
    // -------------------------------------------------------------------------
    // const getItems = async () => {
    //        try{
    //     // Si funciona lña peticion, entro aca
    //         const resultado = await
    //     }// Si no no funciono al apeticion entra a catch
    //      catch(error){
    //         console.log(error)
    //     }
    // }
    // -------------------------------------------------------------------------
    // task.then((respuesta) => {
    //     // CUANDO TENGO UN CODIGO 200 O RTA POSITIVA
    //     setResult(respuesta)
    //     console.log(result)
    // }, err => {
    //     // Respuesta negativa
    //     console.log(err.status)
    // }).catch((error) => {
    //     // Todos los errores internos o falla la API, van al catch
    //     console.log(error)
    // }).finally(() => {
    //     // Entra siempre, sinm importar si la respuesta es positiva o negativa
    //     console.log("Finalmente")
    // })
    return (
        <div className="card">
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
    </div>
    )
}

// A TENER EN CUENTA!
// Si quiero mantener los  valores del state debo pasar la copia del objeto al setState con spred operators
// ya que si no hago eso, el resto de las propiedades se eliminan

export default Pruebas
