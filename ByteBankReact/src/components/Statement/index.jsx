import React from 'react';
import styles from './Statement.module.css';
import Transactions from './Transactions';

export default function Statement({ transactionsPar }) {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Extract</h2>
      <ul>
        {transactionsPar.map((transaction, index) => {
          return (
            <Transactions
              key={index}
              transaction={transaction}
              styles={styles}
            />
          );
        })}
      </ul>
    </section>
  );
}
