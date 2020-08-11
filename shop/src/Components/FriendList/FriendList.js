import React from "react";
import PropTypes from "prop-types";
import styles from "./FriendList.module.css";

import FriendListItem from "../FriendListItem/FriendListItem";

const Task3 = ({ friends }) => {
  return (
    <ul className={styles.task3}>
      {friends.map((friend) => (
        <FriendListItem key={friend.id} avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} />
      ))}
    </ul>
  );
};

export default Task3;

Task3.propTypes = {
  friends: PropTypes.array.isRequired,
};
