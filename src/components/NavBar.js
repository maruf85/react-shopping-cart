import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { CartIcon } from 'components/Icons';
import { CartContext } from 'contexts/CartContext';

const NavBar = () => {
    const {contextValues} = useContext(CartContext);

    return(
        <nav className="navbar justify-content-between">
            <Link to='/'>
                <span className="navbar-brand">
                    <img src="https://pngimg.com/uploads/adidas/adidas_PNG8.png" height={30} alt="" />
                </span> 
            </Link>
            <Link to='/cart'>
                <div className="nav__cart">
                    <CartIcon width={`22pt`} />
                    <span className="nav__cart__badge">{contextValues.itemCount}</span>
                </div>
            </Link>
        </nav>
    );
}

export default NavBar;