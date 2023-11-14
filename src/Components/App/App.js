import './App.css';
import Login from '../Login/Login';
import Home from '../Home/Home';
import Navbar from '../Navbar/Navbar';
import Store from '../Store/store';
import SignUp from '../Signup/SignUp';
import Cart from '../Cart/Cart';
import Product from '../Product/Product'
import Footer from '../Footer/Footer'
import Contact from '../Contact/Contact';
import About from '../About/About'
import EmailLogin from '../Login/EmailLogin';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='about' element={<About/>} />
          <Route path='store' element={<Store/>} />
          <Route path='email_login' element={<EmailLogin/>} />
          <Route path='login' element={<Login/>} /> 
          <Route path='signup' element={<SignUp/>} />
          <Route path='store/:id' element={<Product/>} />
          <Route path='contact' element={<Contact/>} />
          <Route path='cart' element={<Cart/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
