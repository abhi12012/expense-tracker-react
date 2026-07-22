import { useState } from "react";
import "./App.css";

function App() {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [transactions, setTransactions] = useState([]);

  function addTransaction() {
    // Validation
    if (description.trim() === "" || amount <= 0) {
      alert("Please enter description and amount.");
      return;
    }

    // New Transaction
    const newTransaction = {
      id: Date.now(),
      description: description,
      amount: amount,
    };

    // Add Transaction
    setTransactions([...transactions, newTransaction]);

    // Clear Inputs
    setDescription("");
    setAmount(0);
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

      <hr />

      {transactions.map((item) => (
        <p key={item.id}>
          {item.description} - ₹{item.amount}
        </p>
      ))}
    </>
  );
}

export default App;