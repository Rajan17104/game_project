import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Userroute from './routes/Userroute';
import Adminroute from './routes/Adminroute';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  return (
    <Routes>
      <Route path='/*' element={<Userroute />} />

      <Route element={<PrivateRoute />}>
      <Route path='/admin/*' element={<Adminroute />} />
      </Route>
      
    </Routes>
  );
}

export default App;
