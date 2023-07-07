import { calculateNewBalance } from './index';

describe('When a transaction is performed', () => {
  it('of type Deposit the balance must increase', () => {
    const transaction = {
      transaction: 'Deposit',
      value: 50,
    };
    const newBalance = calculateNewBalance(transaction, 100);

    expect(newBalance).toBe(150);
  });
  it('transfer type the balance should decrease', () => {
    const transaction = {
      transacao: 'Transfer',
      value: 50,
    };
    const newBalance = calculateNewBalance(transaction, 100);

    expect(newBalance).toBe(50);
  });
});

test('should return the value of the balance updated with the income', () => {
  const calculateYield = jest.fn((balance) => balance + balance * 0.005);

  const balance = 100;

  const newBalance = calculateYield(balance);

  expect(newBalance).toBe(100.5);
  expect(calculateYield).toBeCalled();
  expect(calculateYield).toBeCalledWith(balance);
});
