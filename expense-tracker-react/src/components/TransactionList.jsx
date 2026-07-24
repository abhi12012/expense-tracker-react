function TransactionList({
  sortedTransactions,
   deleteTransaction,
   editTransaction,
}) {
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
   


  <button onClick={() => deleteTransaction(item.id)}>
    Delete
  </button>
</div>
        ))}
      </div>
    </>
  );
}

export default TransactionList;