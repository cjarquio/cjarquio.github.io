import { Routes, Route } from 'react-router';
import App from '../../App';

const PortfolioRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  );
};

export default PortfolioRouter;
