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
          <div key={item.id}>
  <p>
    {item.isExpense ? "🔴 Expense" : "🟢 Income"} -{" "}
    {item.description} - ₹{item.amount} - {item.category} - {item.date}
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