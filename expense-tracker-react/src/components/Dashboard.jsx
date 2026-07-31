import React from "react";

import { useContext } from "react";
import TransactionContext from "../context/TransactionContext";


function Dashboard({ balance, income, expense, children, totalTransactions }) {

  const { name, transactions } = useContext(TransactionContext);


  

  return (
    <>
      <h2>Dashboard Component</h2>

      <p>Hello {name}</p>
      {children}

<h2>Balance: ₹{balance}</h2>
<h2>Income: ₹{income}</h2>
<h2>Expense: ₹{expense}</h2>

<h2>Total Transactions: {totalTransactions}</h2>

    </>
  );
}

export default React.memo(Dashboard);