const BasketItem = ({ id, name, price, quantity, removeBasket, changeQuantity }) => {
    return (
        <li className="collection-item" data-basketid={price + quantity + id}>
            {name} <i className="material-icons basket-quantity red-text" onClick={() => changeQuantity({ id, price, quantity }, '-')}>remove</i>{' '}
                x{quantity} <i className="material-icons basket-quantity green-text" onClick={() => changeQuantity({ id, price, quantity }, '+')}>add</i> = {price * quantity} 
            <span className="secondary-content" onClick={() => removeBasket({id, price, quantity})}>
                <i className="material-icons">close</i>
            </span>
        </li>
    )
}

export default BasketItem
