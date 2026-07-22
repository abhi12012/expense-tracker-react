import { useState } from "react";
import "./App.css";

function App() {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [transactions, setTransactions] = useState([]);

  function addTransaction() {
    console.log("Add Transaction");
  }

  return (
    <>
      <h1>Expense Tracker</h1>

      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <br />
      <br />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />

      <br />
      <br />

      <button onClick={addTransaction}>
        Add Transaction
      </button>

      <div>
        {transactions.map((item) => (
          <p key={item.id}>
            {item.description} - ₹{item.amount}
          </p>
        ))}
      </div>
    </>
  );
}

export default App;