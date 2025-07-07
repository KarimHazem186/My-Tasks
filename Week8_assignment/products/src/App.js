import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './components/Navbar/Home.';
import About from './components/Navbar/About';
import Contact from './components/Navbar/Contact';
import Product from './components/Navbar/Product';
import Navbar from './components/Navbar/Navbar';
import Features from './components/Navbar/Features';
import News from './components/Navbar/News';
import User from './components/Navbar/User';
import DefUser from './components/Navbar/DefUser';
import AdminUser from './components/Navbar/AdminUser';
import Details from './components/Navbar/Details';
import FilterProduct from './components/Navbar/FilterProduct';
function App() {
  return (
    <>
    <Router>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product' element={<Product />} >
        {/* <Route index path='features' element={<Features />} /> */}
        <Route path='features' element={<Features />} />
        {/* <Route index path='news' element={<News />} /> */}
        <Route path='news' element={<News />} />
        </Route>
        <Route path='*' element={<h1>Page Not Found</h1>} />
        <Route path='/users' element={<User/>} />
        <Route path='/users/:userId' element={<DefUser/>} />
        <Route path='/users/admin' element={<AdminUser/>} />
        <Route path='details/:id' element={<Details/>} />
        <Route path='/filter' element={<FilterProduct/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
