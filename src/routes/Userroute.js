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

function Userroute(props) {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/shop' element={<Shop />} />
                <Route path='/product' element={<Product />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/game' element={<Game />} />
                <Route path='*' element={<Notfound />} />
            </Routes>
            <Footer />
        </>
    );
}

export default Userroute;