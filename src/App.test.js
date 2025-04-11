import { render, screen } from '@testing-library/react';
import Wrapper from './components/Wrapper/Wrapper';

test('renders learn react link', () => {
  render(<Wrapper />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
