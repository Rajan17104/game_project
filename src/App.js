import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Home from './container/Home';
import Footer from './component/Footer';
import { Route, Routes } from 'react-router-dom';
import Shop from './container/Shop';
import Product from './container/Product';
import Contact from './container/Contact';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/product' element={<Product />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
