import { useContext } from 'react'
import { ShopContext } from '../Context/context'

const Cart = () => {
    const { order, handleBasketShow } = useContext(ShopContext)
    return (
        <div className="cart light-blue accent-2 white-text" onClick={handleBasketShow}>
            <i className="material-icons">shopping_cart</i>
            { order.length ? <span className="cart-quantity">{order.length}</span> : '' }
        </div>
    )
}

export default Cart
