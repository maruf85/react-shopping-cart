import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Layout from "components/Layout";
import CartProductsList from "pages/Cart/CartProductsList";
import { EmptyCart } from "components/Icons";
import { CartContext } from "contexts/CartContext";

const Cart = () => {
  const { contextValues } = useContext(CartContext);

  return (
    <Layout>
      {contextValues.cartItems.length !== 0 ? (
        <CartProductsList />
      ) : (
        <div className="empty__cart">
          <EmptyCart />
          <div className="empty__cart__text">Cart is Empty</div>
          <Link to="/">Go back to shop</Link>
        </div>
      )}
    </Layout>
  );
};

export default Cart;
