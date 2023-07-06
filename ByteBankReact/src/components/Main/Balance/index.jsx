import React from 'react';
import styles from './Balance.module.css';
import { ReactComponent as Icon } from './icone-olho.svg';

export default function Balance({ balance }) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.balance}>Balance</h2>
        <Icon />
      </div>
      <div className={styles.divider} />
      <p className={styles.account}>checking account</p>
      <p data-testid="balance" className={styles.value}>{`R$ ${balance}`}</p>
    </div>
  );
}
