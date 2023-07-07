import React from 'react';
import Layout from '../admin/Component/Layout'
import { Route, Routes } from 'react-router-dom';
import Games from '../admin/Container/Games/Games_';
import Dashboard from '../admin/Container/Dashboard/Dashboard';

function Adminroute(props) {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/games' element={<Games />} />
            </Routes>
        </Layout>
    );
}

export default Adminroute;