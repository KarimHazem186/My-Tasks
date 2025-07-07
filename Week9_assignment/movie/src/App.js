import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import Movie from './Movie';
import Details from './Details';
function App() {
  // 27b38043
  return (
    <>
    <Router>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movie' element={<Movie />} />
        <Route path='/watch/:id' element={<Details/>} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
