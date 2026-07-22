import { useState } from 'react'
import './App.css'

function App() {

  const [balance, setBalance] = useState(5000);

  return (
    <>
      <h1 className="title">Expense Tracker</h1>
      <h2>Balance : ₹ {balance}</h2>

     <button onClick={() => setBalance(balance + 1000)}>
  Add Transaction

</button>
    </>
  )
}

export default App