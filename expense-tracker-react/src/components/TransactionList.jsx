function TransactionList({ searchedTransactions }) {
  return (
    <>
      <h2>Transaction List</h2>

      <div>
        {searchedTransactions.map((item) => (
          <div key={item.id}>
            <p>
              {item.isExpense ? "🔴 Expense" : "🟢 Income"} -{" "}
              {item.description} - ₹{item.amount} - {item.category} - {item.date}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default TransactionList;