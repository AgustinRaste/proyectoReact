import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'

const CartWidget = ({items}) =>  {
    console.log(items)
    // Le agrego un numero para que aparezca al lado del carrito
    // Luegos erá reemplazado por el contador de elementos
    return (
        <div>
            <div>
                <FontAwesomeIcon icon={faShoppingCart}/>
                {items}

            </div>
        </div>
    )
}

export default CartWidget
