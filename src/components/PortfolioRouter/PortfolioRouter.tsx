import { Routes, Route } from 'react-router';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import About from '../About/About';

const PortfolioRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<>HI</>} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default PortfolioRouter;
