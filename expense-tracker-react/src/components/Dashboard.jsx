function Dashboard({ name, balance, income, expense, children,totalTransactions }) {
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

export default Dashboard;