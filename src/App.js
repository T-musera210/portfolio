import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './home';
import About from './about';
import Skills from './skills';
import Footer from './components/footer';
import Contact from './contact';
import Notfound from './404';



function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          


          <Route path="*" element={< Notfound />} />




        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
