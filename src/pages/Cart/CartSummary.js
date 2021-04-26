import React, { useContext } from 'react';
import { CartContext } from 'contexts/CartContext';

const CartSummary = () => {
    const { contextValues } = useContext(CartContext);

    return (
        <div className="summary__card">
            <h5 className="summary__card__title">Summary</h5>
            <p className="summary__card__item">
                <span>Total Items</span>
                <span>{contextValues.itemCount}</span>
            </p>
            <p className="summary__card__item">
                <span>SubTotal</span>
                <span>{contextValues.total}$</span>
            </p>
            <hr />
            <p className="summary__card__item">
                <span>Total</span>
                <span>{contextValues.total}$</span>
            </p>
        </div>
    );
}

export default CartSummary;
