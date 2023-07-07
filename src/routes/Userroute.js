import React from 'react';
import Header from '../user/component/Header';
import Home from '../user/container/Home';
import Footer from '../user/component/Footer';
import { Route, Routes } from 'react-router-dom';
import Shop from '../user/container/Shop';
import Product from '../user/container/Product';
import Contact from '../user/container/Contact';
import Notfound from '../user/container/Notfound';
import Game from '../user/container/Game/Game';
import Sign from '../user/container/Auth';
import PrivateRoute from './PrivateRoute';

function Userroute(props) {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/shop' element={<Shop />} />
                <Route path='/product' element={<Product />} />
                <Route path='/contact' element={<Contact />} />

                <Route path='/auth' element={<Sign />} />
                <Route path='*' element={<Notfound />} />

                <Route element={<PrivateRoute />} >
                    <Route path='/game' element={<Game />} />
                </Route>

            </Routes>
            <Footer />
        </>
    );
}

export default Userroute;