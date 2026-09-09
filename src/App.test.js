import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the hero headline', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /aman yadav/i, level: 1 })).toBeInTheDocument();
});
