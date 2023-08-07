import './App.css';
import Login from '../Login/Login';
import Home from '../Home/Home';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='home' element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
