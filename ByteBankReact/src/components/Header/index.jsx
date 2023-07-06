import React from 'react';
import styles from './Header.module.css';
import { ReactComponent as Logo } from './bytebank.svg';
import userAvatar from './avatar.svg';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <div className={styles.user}>
          <p>Joana Fonseca Gomes</p>
          <img src={userAvatar} alt="Avatar icon" />
        </div>
      </div>
    </header>
  );
}
