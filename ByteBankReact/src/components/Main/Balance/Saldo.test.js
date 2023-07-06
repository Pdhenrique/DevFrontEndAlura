import { render, screen } from '@testing-library/react';
import Balance from './index';

describe('Componente <Balance/>', () => {
  test('Deve renderizar o saldo com valor monetario', () => {
    render(<Balance balance={1000} />);

    const balances = screen.getByTestId('balance');
    expect(balances).toHaveTextContent('R$ 1000');
  });
});
