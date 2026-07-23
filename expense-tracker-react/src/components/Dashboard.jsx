function Dashboard(props) {
  return (
    <>
      <h2>Dashboard Component</h2>

      <p>Hello {props.name}</p>

      
      <h2>Balance: ₹{props.balance}</h2>
<h2>Income: ₹{props.income}</h2>
<h2>Expense: ₹{props.expense}</h2>
    </>
  );
}

export default Dashboard;