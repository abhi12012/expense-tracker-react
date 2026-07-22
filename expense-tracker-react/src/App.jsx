import './App.css'

function App() {

  let balance = 1000;

  return (
    <>
      <h1 className="title">Expense Tracker</h1>
      <h2>Balance : ₹ {balance}</h2>
      <button>Add Transaction</button>
    </>
  )
}

export default App