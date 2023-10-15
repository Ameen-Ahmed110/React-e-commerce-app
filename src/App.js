import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/HomePage/Home';
import Product from './components/Product/Product';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Cart from './components/Carts/Cart';
import ErrorPage from './components/ErrorPage/ErrorPage';
import SingleProduct from './components/SingleProduct';

function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* <Sidebar /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route  path='/product' element={<Product />}/>
        <Route  path='/cart' element={<Cart />}/>
        <Route path='/singleproduct/:id' element={<SingleProduct />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
