const Cart = ({ quantity = 0, handleBasketShow }) => {
    return (
        <div className="cart light-blue accent-2 white-text" onClick={handleBasketShow}>
            <i className="material-icons">shopping_cart</i>
            { quantity ? <span className="cart-quantity">{quantity}</span> : '' }
        </div>
    )
}

export default Cart
