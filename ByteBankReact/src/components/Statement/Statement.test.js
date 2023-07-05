import { render, screen } from '@testing-library/react';
import Statement from './index';

test('deve renderizar', () => {
  const transactions = [
    {
      transaction: 'Deposit',
      value: 100,
    },
  ];

  render(<Statement transaction={transactions} />);

  const lista = screen.getByRole('list');
  expect(lista).toBeInTheDocument();
});
