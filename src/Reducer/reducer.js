export function reducer(state, {type, payload}) {
    switch (type) {
        case 'SET_GOODS':
            return {
                ...state,
                goods: payload || [],
                loading: false,
            }

        case 'ADD_TO_BASKET': {
            const itemIndex = state.order.findIndex(orderItem => orderItem.id === payload.id && orderItem.price === payload.price)

            let newOrder = null
            if (itemIndex < 0) {
                const newItem = {
                    ...payload,
                    quantity: 1
                }
                newOrder = [...state.order, newItem]
                localStorage.setItem('orders', JSON.stringify([...state.order, newItem]))
            } else {
                newOrder = state.order.map((orderItem, index) => {
                    if (itemIndex === index) {
                        return {
                            ...orderItem,
                            quantity: orderItem.quantity + 1
                        }
                    } else {
                        return orderItem
                    }
                })
                localStorage.setItem('orders', JSON.stringify(newOrder))
            }
            return {
                ...state,
                order: newOrder,
                alertName: [...state.alertName, {name: payload.name, id: payload.id + Date.now()}]
            }
        }

        case 'REMOVE_FROM_BASKET': {
            document.querySelector(`.collection-item[data-basketid="${payload.price + payload.quantity + payload.id}"`).classList.remove('delete')
            const orderFromLS = JSON.parse(localStorage.getItem('orders'))
            // eslint-disable-next-line
            const newOrderLS = orderFromLS.filter(orderItem => orderItem.id !== payload.id || orderItem.id === payload.id && orderItem.price !== payload.price)
            localStorage.setItem('orders', JSON.stringify(newOrderLS))
            // eslint-disable-next-line
            const newOrder = state.order.filter(orderItem => orderItem.id !== payload.id || orderItem.id === payload.id && orderItem.price !== payload.price)
            return {
                ...state,
                order: newOrder
            }
        }

        case 'CHANGE_QUANTITY': { 
            const newOrder = state.order.map(orderItem => {
                if (payload.item.quantity === 1 && payload.sign === '-' && orderItem.id === payload.item.id) {
                    alert('Количество товара не может быть меньше одного')
                    return orderItem
                }
                if (orderItem.id === payload.item.id && orderItem.price === payload.item.price) {
                    return {
                        ...orderItem,
                        quantity: payload.sign === '+' ? orderItem.quantity + 1 : orderItem.quantity - 1
                    }
                }
                return orderItem
            })
            localStorage.setItem('orders', JSON.stringify(newOrder))
            return {
                ...state,
                order: newOrder
            }
        }

        case 'TOGGLE_BASKET':
            return {
                ...state,
                isBasketShow: !state.isBasketShow
            }

        case 'CLOSE_ALERT':
            return {
                ...state,
                alertName: state.alertName.slice(1)
            }
            
        default:
            return state;
    }
}