import { Routes, Route } from 'react-router';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';

const PortfolioRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<>HI</>} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default PortfolioRouter;
