import React from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import NavBar from '../NavBar/NavBar'

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
