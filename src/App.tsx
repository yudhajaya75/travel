import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/home';
import About from './Pages/about/about';
import Blog from './Pages/Blog/blog';
import Contact from './Pages/Contact/contact';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
