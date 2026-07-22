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
  value={description}
/>
      <br /><br />

      <input
        type="number"
        placeholder="Amount"

      />
 <br /><br />

      <button onClick={addTransaction}></button>
    </>
  );
}

export default App;