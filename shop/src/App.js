import React, { Fragment } from "react";
import "./App.css";

// Task1
import users from "./db/user.json";
import Profile from "./Components/Profile/App";

// Task2
import statisticalData from "./db/statistical-data.json";
import Statistics from "./Components/Statistics/App";

// Task3
import friends from "./db/friends.json";
import FriendList from "./Components/FriendList/App";

// Task4
import transactions from "./db/transactions.json";
import TransactionHistory from "./Components/TransactionHistory/App";

// Get random key
const getRundomKey = (max = 1000000000000) => {
  return Math.floor(Math.random() * Math.floor(max));
};

function App() {
  return (
    <Fragment>
      <div className="task1">
        {users.map((user) => (
          <Profile key={getRundomKey()} name={user.name} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats} />
        ))}
      </div>
      <div className="task2">
        <section className="statistics">
          <h2 className="title">Upload stats</h2>

          <ul className="stat-list">
            {statisticalData.map((obj) => (
              <Statistics key={getRundomKey()} title="Upload stats" obj={obj} />
            ))}
          </ul>
        </section>
      </div>
      <ul className="task3">
        {friends.map((friend) => (
          <FriendList key={friend.id} obj={friend} />
        ))}
      </ul>
      <div className="task4">
        <table className="transaction-history">
          <thead>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <TransactionHistory key={transaction.id} obj={transaction} />
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
}
export default App;
