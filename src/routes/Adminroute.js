import React from 'react';
import Layout from '../admin/Component/Layout'
import { Route, Routes } from 'react-router-dom';
import Games from '../admin/Container/Games_';

function Adminroute(props) {
    return (
       <Layout>
            <Routes>
                <Route path='/games' element={<Games />} />
            </Routes>
       </Layout>
    );
}

export default Adminroute;