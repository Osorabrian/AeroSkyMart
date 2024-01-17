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
import Checkout from '../Checkout/Checkout'
import EmailLogin from '../Login/EmailLogin';
import ResetPassword from '../Login/ResetPassword';
import ChangePassword from '../Login/ChangePassword';
import ForgotPassword from '../Login/Forgot Password';
import Succesful from '../Checkout/Successful';
import WishList from '../Wishlist/WishList';
import {Routes, Route} from 'react-router-dom'
import Profile from '../MyProfile/Profile';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='store' element={<Store/>}/>
          <Route path='login/:email' element={<EmailLogin/>}/>
          <Route path='login/:email/forgot_password/:firstName' element={<ForgotPassword/>}/>
          <Route path='reset_password' element={<ResetPassword/>} /> 
          <Route path='change_password' element={<ChangePassword/>} /> 
          <Route path='login' element={<Login/>} /> 
          <Route path='signup' element={<SignUp/>} />
          <Route path='store/:id' element={<Product/>} />
          <Route path='contact' element={<Contact/>} />
          <Route path='cart' element={<Cart/>} />
          <Route path='checkout' element={<Checkout/>} />
          <Route path='payment_successful' element={<Succesful/>}/>
          <Route path='wishlist' element={<WishList/>} />
          <Route path='my_profile' element={<Profile/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
