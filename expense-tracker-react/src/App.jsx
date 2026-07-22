import { useState } from "react";
import "./App.css";

function App() {

  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);

  return (
    <>
      <h1>Expense Tracker</h1>

      <input
        type="text"
        placeholder="Description"
      />

      <br /><br />

      <input
        type="number"
        placeholder="Amount"
      />
    </>
  );
}

export default App;