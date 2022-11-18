import { Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar';
import './App.css';
import Ordersummery from './components/Ordersummery';

import New from'./components/New';
import Product from './components/Product';
import  Feature from'./components/Feature';
import Nomach from './components/Nomach';
import Birhanu from './components/Birhanu';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='ordersummery' element={<Ordersummery></Ordersummery>}></Route>
   
    <Route path='product' element={<Product></Product>}>
    <Route path='feature' element={<Feature></Feature>}></Route>
    <Route path='New' element={<New></New>}></Route>
    </Route>
    <Route path='*' element={<Nomach></Nomach>}></Route>
    <Route path='birhanu' element={<Birhanu></Birhanu>}></Route>
    </Routes>
    </>
  );
}
export default App;
                  