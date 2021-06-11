import BasketItem from './BasketItem'

const BasketList = ({ order = [], isBasketShow, handleBasketShow, removeBasket, changeQuantity }) => {
    const totalPrice = order.reduce((sum, el) => sum + el.price * el.quantity, 0)

    const closeBasket = () => {
        document.querySelector('.modal-shop.open').classList.add('close')
        document.querySelector('.modal-shop.open').classList.remove('open')
        setTimeout(() => {
            document.querySelector('.modal-shop .collection').classList.add('hide')
            handleBasketShow()
            setTimeout(() => document.querySelector('.modal-shop .collection').classList.remove('hide'), 350);
        }, 500);
    }

    return (
        <div className={`modal-shop${isBasketShow ? " open" : ""}`}>
            <ul className="collection">
                <li className="collection-item active">Корзина <span className="secondary-content" onClick={closeBasket}><i className="material-icons">close</i></span></li>
                {order.length ? order.map((item, index) => <BasketItem key={item.id + String(index)} {...item} removeBasket={removeBasket} changeQuantity={changeQuantity} />) : <li className="collection-item">Корзина пуста</li>}
                <li className="collection-item active">Общая стоимость: {totalPrice}</li>
            </ul>
        </div>
    )
}

export default BasketList
