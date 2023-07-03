import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Userroute from './routes/Userroute';
import Adminroute from './routes/Adminroute';

function App() {
  return (
    <Routes>
      <Route path='/*' element={<Userroute />} />
      <Route path='/admin/*' element={<Adminroute />} />
    </Routes>
  );
}

export default App;
