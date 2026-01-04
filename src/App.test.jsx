import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Rick & Morty heading', () => {
  render(<App />);
  const heading = screen.getByText(/Rick & Morty/i); // match text in your App component
  expect(heading).toBeInTheDocument();
});
