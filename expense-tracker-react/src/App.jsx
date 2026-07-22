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

    const newTransaction = {
      id: Date.now(),
      description,
      amount,
    };

    setTransactions([...transactions, newTransaction]);

    // Clear Inputs
    setDescription("");
    setAmount(0);
  }

  function deleteTransaction(id) {
    setTransactions(
      transactions.filter((item) => item.id !== id)
    );
  }


  const balance = transactions.reduce((total, item) => {
  return total + item.amount;
}, 0);

  return (
    <>
      <h1>Expense Tracker</h1>

      <h2>Balance: ₹{balance}</h2>

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
        <div key={item.id}>
          <p>
            {item.description} - ₹{item.amount}
          </p>

          <button onClick={() => deleteTransaction(item.id)}>
            Delete
          </button>

          <hr />
        </div>
      ))}
    </>
  );
}

export default App;