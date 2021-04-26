import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'sass/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from 'pages/Cart';
import Products from 'pages/Product';
import ProductsContextProvider from 'contexts/ProductsContext';
import CartContextProvider from 'contexts/CartContext';

function App() {
  return (
    <div>
      <ProductsContextProvider>
        <CartContextProvider>
          <Router>
            <Switch>
              <Route exact path="/" component={Products}/>
              <Route exact path="/cart" component={Cart}/>
            </Switch>
          </Router>
        </CartContextProvider>
      </ProductsContextProvider>
    </div>
  );
}

export default App;
