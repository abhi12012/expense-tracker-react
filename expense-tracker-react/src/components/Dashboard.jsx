import React from "react";

import { useContext } from "react";
import TransactionContext from "../context/TransactionContext";


function Dashboard({ balance, income, expense, children, totalTransactions }) {

  const { name } = useContext(TransactionContext);


  

  return (
    <>
      <h2>Dashboard Component</h2>

      <p>Hello {name}</p>
      {children}


<div className="dashboard-cards">

  <div className="card">
    <h3>Balance</h3>
    <p>₹{balance}</p>
  </div>

  <div className="card">
    <h3>Income</h3>
    <p>₹{income}</p>
  </div>

  <div className="card">
    <h3>Expense</h3>
    <p>₹{expense}</p>
  </div>

  <div className="card">
    <h3>Total Transactions</h3>
    <p>{totalTransactions}</p>
  </div>

</div>

    </>
  );
}

export default React.memo(Dashboard);