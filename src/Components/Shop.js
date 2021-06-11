import { useState, useEffect } from 'react'
import { API_KEY, API_URL } from '../config'
import Alert from './Alert'
import BasketList from './BasketList'
import Cart from './Cart'
import GoodsList from './GoodsList'
import Preloader from './Preloader'

const Shop = () => {
    const [goods, setGoods] = useState([])
    const [loading, setLoading] = useState(true)
    const [order, setOrder] = useState([])
    const [isBasketShow, setBasketShow] = useState(false)
    const [alertName, setAlertName] = useState([])

    const addToBasket = item => {
        const itemIndex = order.findIndex(orderItem => orderItem.id === item.id && orderItem.price === item.price)

        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1
            }
            setOrder([...order, newItem])
            localStorage.setItem('orders', JSON.stringify([...order, newItem]))
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (itemIndex === index) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1
                    }
                } else {
                    return orderItem
                }
            })
            setOrder(newOrder)
            localStorage.setItem('orders', JSON.stringify(newOrder))
        }
        
        setAlertName([...alertName, {name: item.name, id: item.id + Date.now()}])
    }

    const removeFromBasket = item => {
        setTimeout(() => {
            document.querySelector(`.collection-item[data-basketid="${item.price + item.quantity + item.id}"`).classList.remove('delete')
            // eslint-disable-next-line
            setOrder(order.filter(orderItem => orderItem.id !== item.id || orderItem.id === item.id && orderItem.price !== item.price))
            const orderFromLS = JSON.parse(localStorage.getItem('orders'))
            // eslint-disable-next-line
            const newOrderLS = orderFromLS.filter(orderItem => orderItem.id !== item.id || orderItem.id === item.id && orderItem.price !== item.price)
            localStorage.setItem('orders', JSON.stringify(newOrderLS))
        }, 400);
        document.querySelector(`.collection-item[data-basketid="${item.price + item.quantity + item.id}"`).classList.add('delete')
    }

    const handleBasketShow = () => setBasketShow(!isBasketShow)

    const changeQuantity = (item, sign) => {
        const newOrder = order.map(orderItem => {
            if (item.quantity === 1 && sign === '-' && orderItem.id === item.id) {
                alert('Количество товара не может быть меньше одного')
                return orderItem
            }
            if (orderItem.id === item.id && orderItem.price === item.price) {
                return {
                    ...orderItem,
                    quantity: sign === '+' ? orderItem.quantity + 1 : orderItem.quantity - 1
                }
            }
            return orderItem
        })
        setOrder(newOrder)
        localStorage.setItem('orders', JSON.stringify(newOrder))
    }

    const closeAlert = () => setAlertName(alertName.slice(1))

    useEffect(() => {
        if (localStorage.getItem('orders')) {
            setOrder(JSON.parse(localStorage.getItem('orders')))
        }
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY
            }
        })
            .then(response => response.ok ? response.json() : Promise.reject(response))
            .then(data => {
                console.log(data);
                setGoods(data.shop)
                setLoading(false)
            })
            .catch(error => alert(error))
    }, [])

    return (
        <main className="container content">
            <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
            { loading ? <Preloader /> : <GoodsList goods={goods} addToBasket={addToBasket} /> }
            <BasketList order={order} isBasketShow={isBasketShow} 
                handleBasketShow={handleBasketShow} removeBasket={removeFromBasket} changeQuantity={changeQuantity} />
            {alertName.length ? <Alert name={alertName} closeAlert={closeAlert} /> : ''}
        </main>
    )
}

export default Shop
