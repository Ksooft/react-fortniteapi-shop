import { useEffect, useContext } from 'react'
import { API_KEY, API_URL } from '../config'

import { ShopContext } from '../Context/context'

import Alert from './Alert'
import BasketList from './BasketList'
import Cart from './Cart'
import GoodsList from './GoodsList'
import Preloader from './Preloader'

const Shop = () => {
    const {setGoods, loading, order, alertName} = useContext(ShopContext)

    // const [loading, setLoading] = useState(true)
    // const [order, setOrder] = useState([])
    // const [isBasketShow, setBasketShow] = useState(false)
    // const [alertName, setAlertName] = useState([])

    // const addToBasket = item => {
    //     const itemIndex = order.findIndex(orderItem => orderItem.id === item.id && orderItem.price === item.price)

    //     if (itemIndex < 0) {
    //         const newItem = {
    //             ...item,
    //             quantity: 1
    //         }
    //         setOrder([...order, newItem])
    //         localStorage.setItem('orders', JSON.stringify([...order, newItem]))
    //     } else {
    //         const newOrder = order.map((orderItem, index) => {
    //             if (itemIndex === index) {
    //                 return {
    //                     ...orderItem,
    //                     quantity: orderItem.quantity + 1
    //                 }
    //             } else {
    //                 return orderItem
    //             }
    //         })
    //         setOrder(newOrder)
    //         localStorage.setItem('orders', JSON.stringify(newOrder))
    //     }
        
    //     setAlertName([...alertName, {name: item.name, id: item.id + Date.now()}])
    // }

    // const removeFromBasket = item => {
    //     setTimeout(() => {
    //         document.querySelector(`.collection-item[data-basketid="${item.price + item.quantity + item.id}"`).classList.remove('delete')
    //         // eslint-disable-next-line
    //         setOrder(order.filter(orderItem => orderItem.id !== item.id || orderItem.id === item.id && orderItem.price !== item.price))
    //         const orderFromLS = JSON.parse(localStorage.getItem('orders'))
    //         // eslint-disable-next-line
    //         const newOrderLS = orderFromLS.filter(orderItem => orderItem.id !== item.id || orderItem.id === item.id && orderItem.price !== item.price)
    //         localStorage.setItem('orders', JSON.stringify(newOrderLS))
    //     }, 400);
    //     document.querySelector(`.collection-item[data-basketid="${item.price + item.quantity + item.id}"`).classList.add('delete')
    // }

    // const handleBasketShow = () => setBasketShow(!isBasketShow)

    // const changeQuantity = (item, sign) => {
    //     const newOrder = order.map(orderItem => {
    //         if (item.quantity === 1 && sign === '-' && orderItem.id === item.id) {
    //             alert('???????????????????? ???????????? ???? ?????????? ???????? ???????????? ????????????')
    //             return orderItem
    //         }
    //         if (orderItem.id === item.id && orderItem.price === item.price) {
    //             return {
    //                 ...orderItem,
    //                 quantity: sign === '+' ? orderItem.quantity + 1 : orderItem.quantity - 1
    //             }
    //         }
    //         return orderItem
    //     })
    //     setOrder(newOrder)
    //     localStorage.setItem('orders', JSON.stringify(newOrder))
    // }

    // const closeAlert = () => setAlertName(alertName.slice(1))

    useEffect(() => {
        if (localStorage.getItem('orders')) {
            order.push(...JSON.parse(localStorage.getItem('orders')))
        }
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY
            }
        })
            .then(response => response.ok ? response.json() : Promise.reject(response))
            .then(data => setGoods(data.shop))
            .catch(error => alert(error))
            // eslint-disable-next-line
    }, [])

    return (
        <main className="container content">
            <Cart />
            { loading ? <Preloader /> : <GoodsList /> }
            <BasketList />
            {alertName.length ? <Alert /> : ''}
        </main>
    )
}

export default Shop
