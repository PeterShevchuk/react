import React from "react";
import PropTypes from "prop-types";

import styles from "./FriendListItem.module.css";

const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <li className={styles.item}>
      <span className={isOnline ? styles.status+` `+styles.on : styles.status+` `+styles.off}></span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
