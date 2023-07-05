import React, { useState } from 'react';
import styles from './Formulario.module.css';

export default function Form({ performTransaction }) {
  const [valueState, setValueState] = useState({ transaction: '', value: '' });

  function handleChange(e) {
    const { name, value } = e.target;
    const updatedValues = { ...valueState, [name]: value };
    setValueState(updatedValues);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const transactionDate = new Date().toLocaleDateString('pt-br');
    const transactionMonth = new Date().toLocaleDateString('pt-br', {
      month: 'long',
    });
    performTransaction({
      ...valueState,
      date: transactionDate,
      month: transactionMonth[0].toUpperCase() + transactionMonth.substring(1),
    });
    setValueState({ ...valueState, value: '' });
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3 className={styles.subtitle__options}>New transaction</h3>
      <select
        className={styles.group__actions}
        onChange={handleChange}
        name="transaction"
        data-testid="select-option"
      >
        <option defaultValue="Select transaction type">
          Select transaction type
        </option>
        <option value="Deposit">Deposit</option>
        <option value="transfer">transfer</option>
      </select>
      <label htmlFor="value" className={styles.subtitle}>
        Value
      </label>
      <input
        onChange={handleChange}
        className={styles.value__field}
        type="number"
        value={valueState.value}
        name="value"
        id="value"
        placeholder="Type a value"
      />
      <button className={styles.button} type="submit">
        Release transaction
      </button>
    </form>
  );
}
