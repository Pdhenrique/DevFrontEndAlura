import { render, screen } from '@testing-library/react';
import Transactions from './index';
import styles from '../Statement.module.css';

test('deve renderizar o mesmo componente com props atualizadas', () => {
  const transactions = {
    transaction: 'Deposit',
    value: 100,
  };

  const { rerender } = render(
    <Transactions styles={styles} transaction={transactions} />
  );

  const transactionType = screen.getByTestId('transactionType');
  const transactionValue = screen.getByTestId('transactionValue');

  expect(transactionType).toHaveTextContent('Deposit');
  expect(transactionValue).toHaveTextContent('R$ 100');

  const newTransaction = {
    transaction: 'Transfer',
    value: 50,
  };
  rerender(<Transactions styles={styles} transaction={newTransaction} />);

  const newTransactionType = screen.getByTestId('transactionType');
  const newTransactionValue = screen.getByTestId('transactionValue');

  expect(newTransactionType).toHaveTextContent('Transfer');
  expect(newTransactionValue).toHaveTextContent('- R$ 50');
});
