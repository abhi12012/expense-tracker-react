import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [isExpense, setIsExpense] = useState(false);





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
  isExpense
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




  useEffect(() => {
  localStorage.setItem(
    "transactions",
    JSON.stringify(transactions)
  );
}, [transactions]);



  const income = transactions
  .filter((item) => item.isExpense === false)
  .reduce((total, item) => total + item.amount, 0);

const expense = transactions
  .filter((item) => item.isExpense === true)
  .reduce((total, item) => total + item.amount, 0);

const balance = income - expense;
  return (
    <>
      <h1>Expense Tracker</h1>

      <h2>Balance: ₹{balance}</h2>


      <h2>Income: ₹{income}</h2>



    <h2>Expense: ₹{expense}</h2>

   


      

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


      
      <label>
  <input
    type="checkbox"
    checked={isExpense}
    onChange={(e) => setIsExpense(e.target.checked)}
  />
  Expense
</label>

 <p>Expense: {isExpense.toString()}</p>

<br />
      <br />



      <button onClick={addTransaction}>
        Add Transaction
      </button>


       <br />
      <br />


      

      
      {transactions.map((item) => (
        <div key={item.id}>



          <p>
  {item.isExpense ? "🔴 Expense" : "🟢 Income"} - {item.description} - ₹{item.amount}
</p>



          <button onClick={() => deleteTransaction(item.id)}>
            Delete
          </button>



          <hr />
        </div>
      ))}
       


       






      <br />
      <br />

      




      

    </>
  );
}

export default App;