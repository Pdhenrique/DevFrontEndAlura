import React from 'react';
import styles from './Statement.module.css';
import Transacoes from './transactions';

export default function Statement({ transactions }) {
  return (
    <section className={styles.container}>
      <h2 className={styles.titulo}>Extrato</h2>
      <ul>
        {transactions.map((transaction, index) => {
          return (
            <Transacoes key={index} transaction={transaction} styles={styles} />
          );
        })}
      </ul>
    </section>
  );
}
