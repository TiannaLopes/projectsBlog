import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio hero', () => {
  render(<App />);
  expect(screen.getByText(/Tianna Lopes/i)).toBeInTheDocument();
  expect(screen.getByText(/Analyst Programmer III/i)).toBeInTheDocument();
});
