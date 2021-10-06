import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import NavBar from '../NavBar/NavBar'
import Pruebas from '../Pruebas/Pruebas'

const Main = () => {

    return (
        <>
            <NavBar/>
            <ItemListContainer
                greeting = 'Hola!! Esta es mi tienda'
            />
        </>
    )
}

export default Main
