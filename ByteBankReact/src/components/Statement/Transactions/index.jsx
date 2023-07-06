import React from 'react';

export default function Transactions({ transaction, styles }) {
  return (
    <li>
      <p className={styles.month}>{transaction.month}</p>
      <div className={styles.transaction}>
        <p data-testid="transactionType">{transaction.transaction}</p>
        <span>{transaction.date}</span>
      </div>
      {transaction.transaction === 'Transfer' ? (
        <h3
          data-testid="transactionValue"
          className={styles.value}
        >{`- R$ ${transaction.value}`}</h3>
      ) : (
        <h3
          data-testid="transactionValue"
          className={styles.value}
        >{` R$ ${transaction.value}`}</h3>
      )}
      <div className={styles.divider} />
    </li>
  );
}
