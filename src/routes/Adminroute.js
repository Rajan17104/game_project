import React from 'react';
import Layout from '../admin/Component/Layout'
import { Route, Routes } from 'react-router-dom';
import Games from '../admin/Container/Games/Games_';
import Dashboard from '../admin/Container/Dashboard/Dashboard';
import Team from '../admin/Container/Team/Team';

function Adminroute(props) {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/games' element={<Games />} />
                <Route path='/team' element={<Team />} />
            </Routes>
        </Layout>
    );
}

export default Adminroute;