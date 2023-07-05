import React from 'react';
import styles from './Main.module.css';
import { ReactComponent as Illustration } from './ilustracao.svg';
import Balance from './Balance';

const date = Date.now();
const today = new Date(date);
const dayOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export default function Principal({ balance }) {
  return (
    <section className={styles.container}>
      <div className={styles.upper__detail} />
      <h1 className={styles.title}>hello, Joana :)!</h1>
      <p className={styles.date}>{`${
        dayOfWeek[today.getDay()]
      }, ${today.toLocaleDateString('pt-BR')}`}</p>
      <div className={styles.wrapper}>
        <Illustration
          className={styles.illustration}
          width="230"
          height="185"
        />
        <Balance balance={balance} />
      </div>
      <div className={styles.lower__detail} />
    </section>
  );
}
