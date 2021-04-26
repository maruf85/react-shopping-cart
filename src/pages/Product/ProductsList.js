import React, { useContext } from 'react';
import { ProductsContext } from 'contexts/ProductsContext';
import ProductItem from './ProductItem';

const Products = () => {
    const { products } = useContext(ProductsContext);

    return(
        <div className="row">              
            {
                products.map(product => (
                    <ProductItem key={product.id} product={product} />
                ))
            }
        </div>
    );
}

export default Products;