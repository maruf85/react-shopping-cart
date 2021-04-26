import React, { createContext, useReducer } from 'react';
import { CartReducer, sumItems } from 'contexts/CartReducer';

export const CartContext = createContext();

const storage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
const initialState = { cartItems: storage, ...sumItems(storage) };

const CartContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(CartReducer, initialState)

    const addProduct = payload => {
        dispatch({
            type: 'ADD_ITEM', 
            payload
        })
    }

    const increase = payload => {
        dispatch({
            type: 'INCREASE_ITEM', 
            payload
        })
    }

    const decrease = payload => {
        dispatch({
            type: 'DECREASE_ITEM', 
            payload
        })
    }

    const removeProduct = payload => {
        dispatch({
            type: 'REMOVE_ITEM', 
            payload
        })
    }

    const contextValues = {
        addProduct,
        increase,
        decrease,
        removeProduct,
        ...state
    }

    return(
        <CartContext.Provider value={{contextValues}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;