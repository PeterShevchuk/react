import React, { Fragment } from "react";
import "./App.css";

// Task1
import users from "./db/user.json";
import Profile from "./Components/Profile/Profile";

// Task2
import statisticalData from "./db/statistical-data.json";
import Statistics from "./Components/Statistics/Statistics";

// Task3
import friends from "./db/friends.json";
import FriendList from "./Components/FriendList/FriendList";

// Task4
import transactions from "./db/transactions.json";
import TransactionHistory from "./Components/TransactionHistory/TransactionHistory";

function App() {
  return (
    <Fragment>
      <Profile name={users.name} tag={users.tag} location={users.location} avatar={users.avatar} stats={users.stats} />

      <Statistics title="Upload stats" statisticalData={statisticalData} />

      <FriendList friends={friends} />

      <TransactionHistory transactions={transactions} />
    </Fragment>
  );
}
export default App;
