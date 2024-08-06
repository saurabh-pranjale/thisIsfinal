import logo from './logo.svg';
import './App.css';
import Euro from './Context';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Cart from './Components/Cart';
import Navbar from './Components/Navbar';

function App() {
  return (
<>
<Euro>
 
<BrowserRouter>
<Navbar />
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/cart' element={<Cart />} />
</Routes>
</BrowserRouter>
</Euro>
</>
  );
}

export default App;
