import React from "react";
import PropTypes from "prop-types";
import styles from "./TransactionHistory.module.css";

const Task4 = ({ transactions }) => {
  return (
    <div className={styles.task4}>
      <table className={styles["transaction-history"]}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.type + transaction.amount + transaction.currency}>
              <td>{transaction.type}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Task4;

Task4.propTypes = {
  transactions: PropTypes.array.isRequired,
};
