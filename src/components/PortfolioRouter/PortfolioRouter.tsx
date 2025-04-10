import { Routes, Route } from 'react-router';
import Wrapper from '../AppWrapper/Wrapper';

const PortfolioRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Wrapper />} />
    </Routes>
  );
};

export default PortfolioRouter;
