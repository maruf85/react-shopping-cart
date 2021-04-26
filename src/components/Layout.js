import React from 'react';
import NavBar from 'components/NavBar';

const Layout = ({children}) => {
    return(
        <div className="container">
            <NavBar />
            <main className="mt-4">
                {children}
            </main>
        </div>
    );
}

export default Layout;