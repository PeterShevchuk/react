import React from "react";
import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

const Task2 = ({ statisticalData }) => {
  return (
    <div className={styles.task2}>
      <section className={styles.statistics}>
        <h2 className={styles.title}>Upload stats</h2>

        <ul className={styles["stat-list"]}>
          {statisticalData.map((item) => (
            <li className={styles.item} key={item.label + item.percentage}>
              <span className={styles.label}>{item.label}</span>
              <span className={styles.percentage}>{item.percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Task2;

Task2.propTypes = {
  statisticalData: PropTypes.array.isRequired,
};
