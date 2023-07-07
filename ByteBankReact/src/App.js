import React, { useState } from 'react';
import styles from './App.module.css';
import { calculateNewBalance } from './utils';

import Header from './components/Header';
import Statement from './components/Statement';
import Menu from './components/Menu';
import Main from './components/Main';
import Transaction from './components/Transaction';

export default function App() {
  const [balance, setBalance] = useState(1000);
  const [transactions, setTransactions] = useState([]);

  function performTransaction(values) {
    const newBalance = calculateNewBalance(values, balance);
    setBalance(newBalance);
    setTransactions([...transactions, values]);
  }

  return (
    <>
      <Header />
      <main className={styles.container}>
        <Menu />
        <div className={styles.wrapper}>
          <Main balance={balance} />
          <Transaction performTransaction={performTransaction} />
        </div>
        <Statement transactionsPar={transactions} />
      </main>
    </>
  );
}
