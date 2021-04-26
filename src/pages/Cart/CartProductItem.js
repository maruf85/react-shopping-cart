import React, {useContext} from 'react';
import { baseURL } from 'constants/api-url';
import { AddIcon, DeleteIcon, RemoveIcon } from 'components/Icons';
import { CartContext } from 'contexts/CartContext';

const CartProductItem = ({product}) => {
    const { contextValues } = useContext(CartContext);

    const removeItem = item => {
        if(item.quantity === 1) {
            contextValues.removeProduct(item);
        } else {
            contextValues.decrease(item);
        }
    }

    return (
        <div>
            <tbody key={product.id}>
                <tr>
                    <td width={8}>
                        <img className="cart__table__image" src={`${baseURL}/images/${product.image}`} alt={product.name} />
                    </td>
                    <td>{product.name}</td>
                    <td>${product.price}</td>
                    <td>
                        <div className="cart__item__quantity__control">
                            <AddIcon width={14} onClick={() => contextValues.increase(product)} />
                            <span>{product.quantity}</span>
                            <RemoveIcon width={14} onClick={() => removeItem(product)} /> 
                        </div>
                    </td>
                    <td>
                        <DeleteIcon width={14} onClick={() => contextValues.removeProduct(product)} />
                    </td>
                </tr>
            </tbody>
        </div>
    );
}

export default CartProductItem;
