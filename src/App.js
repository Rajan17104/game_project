import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Userroute from './routes/Userroute';
import Adminroute from './routes/Adminroute';
import PrivateRoute from './routes/PrivateRoute';
import { Provider } from 'react-redux';
import { configureStore } from './user/Redux/Store';

function App() {

  const store = configureStore();

  return (
    <Provider store={store}>
      <Routes>
        <Route path='/*' element={<Userroute />} />

        <Route element={<PrivateRoute />}>
          <Route path='/admin/*' element={<Adminroute />} />
        </Route>

      </Routes>
    </Provider>
  );
}

export default App;
