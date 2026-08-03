import React from "react";
import { useContext } from "react";
import TransactionContext from "../context/TransactionContext";

function TransactionList({
  sortedTransactions,
  editTransaction,
}) {

  
 const { deleteTransaction: contextDeleteTransaction } =
  useContext(TransactionContext);

  return (
  <>
    <h2>Transaction List</h2>

    <div>
      {sortedTransactions.map((item) => (

        <div
  key={item.id}
  className={`transaction-card ${
    item.isExpense ? "expense-card" : "income-card"
  }`}
>

          <p>{item.isExpense ? "🔴 Expense" : "🟢 Income"}</p>

          <p>
            <strong>Description:</strong> {item.description}
          </p>

          <p>
            <strong>Amount:</strong> ₹{item.amount}
          </p>

          <p>
            <strong>Category:</strong> {item.category}
          </p>

          <p>
            <strong>Date:</strong> {item.date}
          </p>

          <button onClick={() => editTransaction(item)}>
            Edit
          </button>

          <button onClick={() => contextDeleteTransaction(item.id)}>
            Delete
          </button>

        </div>
      ))}
    </div>
  </>
);
}

export default React.memo(TransactionList);