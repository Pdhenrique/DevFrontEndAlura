import { render, screen } from '@testing-library/react';
import Header from './index';

test('should render user name', () => {
  render(<Header />);
  const userName = screen.getByText('Joana Fonseca Gomes');
  expect(userName).toBeInTheDocument();
});
