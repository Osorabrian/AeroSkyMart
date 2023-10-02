import './App.css';
import Login from '../Login/Login';
import Home from '../Home/Home';
import Navbar from '../Navbar/Navbar';
import Store from '../Store/store';
import SignUp from '../Signup/SignUp';
import Product from '../Product/Product'
import {Routes, Route} from 'react-router-dom'
import SideNav from '../Navbar/SideNav';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SideNav/>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='store' element={<Store/>} />
          <Route path='login' element={<Login/>} /> 
          <Route path='signup' element={<SignUp/>} />
          <Route path='store/:id' element={<Product/>} />
      </Routes>
    </div>
  );
}

export default App;
