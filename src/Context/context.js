import { createContext, useReducer } from 'react'
import { reducer } from '../Reducer/reducer'

export const ShopContext = createContext()

const initialState = {
    goods: [],
    loading: true,
    order: [],
    isBasketShow: false,
    alertName: []
}

export const ContextProvider = ({children}) => {
    const [value, dispatch] = useReducer(reducer, initialState)

    value.closeAlert = () => dispatch({type: 'CLOSE_ALERT'})

    value.addToBasket = item => dispatch({type: 'ADD_TO_BASKET', payload: item})

    value.removeFromBasket = item => {
        document.querySelector(`.collection-item[data-basketid="${item.price + item.quantity + item.id}"`).classList.add('delete')
        setTimeout(() => {
            dispatch({type: 'REMOVE_FROM_BASKET', payload: item})
        }, 380);
    }

    value.changeQuantity = (item, sign) => dispatch({type: 'CHANGE_QUANTITY', payload: {item, sign}})

    value.handleBasketShow = () => dispatch({type: 'TOGGLE_BASKET'})

    value.setGoods = data => dispatch({type: 'SET_GOODS', payload: data})

    return <ShopContext.Provider value={value}>
        {children}
    </ShopContext.Provider>
}
