import React, { useContext } from 'react';
import { baseURL } from 'constants/api-url';
import { CartContext } from 'contexts/CartContext';

const ProductItem = ({product}) => {
    const {contextValues} = useContext(CartContext)

    const isInCart = product => {
        return !!contextValues.cartItems.find(item => item.id === product.id);
    }

    return(
        <div className="col-lg-3" key={product.id}>
            <div className="card product__card">
                <img className="card-img-top" src={`${baseURL}/images/${product.image}`} alt={product.name} />
                <div className="card-body product__card__body">
                    <p className="card-text product__card__text mb-0">{product.name}</p>
                    <p className="card-text product__card__text">${product.price}</p>
                    {/* <button className="button" onClick={() => isInCart(product) ? contextValues.increase(product): contextValues.addProduct(product)}>Add to cart</button> */}
                    {
                        isInCart(product) && 
                        <button onClick={() => contextValues.increase(product)} className="button mt-2">Add more</button>
                    }

                    {
                        !isInCart(product) && 
                        <button onClick={() => contextValues.addProduct(product)} className="button mt-2">Add to cart</button>
                    }
                </div>
            </div> 
        </div> 
    );
}

export default ProductItem;