import React, { createContext, useState, useEffect } from 'react';
import ProductService from 'services/ProductService';

export const ProductsContext = createContext();

const ProductsContextProvider = ({children}) => {
    const [products, setProduct] = useState([]);

    useEffect(() => {
        ProductService.getAllProducts().then(product => {setProduct(product)})
    }, []);

    return(
        <ProductsContext.Provider value={{products}}>
            {children}
        </ProductsContext.Provider>
    );
}

export default ProductsContextProvider;