import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './home';
import About from './about';
import Services from './services';
import Footer from './components/footer';
import Contact from './contact';
import Resume from './resume';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />



        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
