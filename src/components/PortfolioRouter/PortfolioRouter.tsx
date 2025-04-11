import { Routes, Route } from 'react-router';
import Contact from '../Contact/Contact';

const PortfolioRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<>HI</>} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default PortfolioRouter;
