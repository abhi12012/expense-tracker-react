import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);


 const [transactions, setTransactions] = useState(() => {
  const savedTransactions = localStorage.getItem("transactions");

  return savedTransactions
    ? JSON.parse(savedTransactions)
    : [];
});


  const [isExpense, setIsExpense] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Food");





  function addTransaction() {
  // Validation
  if (description.trim() === "" || amount <= 0) {
    alert("Please enter description and amount.");
    return;
  }

  // Edit Mode
  if (editingId !== null) {
    setTransactions(
      transactions.map((item) => {
        if (item.id === editingId) {
          return {
            ...item,
            description: description,
            amount: amount,
            isExpense: isExpense,
          };
        }

        return item;
      })
    );

    setEditingId(null);

    setDescription("");
    setAmount(0);
    setIsExpense(false);
    setCategory(item.category);

    return;
  }

  // Add New Transaction
  const newTransaction = {
    id: Date.now(),
    description,
    amount,
    isExpense,
    category,
  };

  setTransactions([...transactions, newTransaction]);

  // Clear Inputs
  setDescription("");
  setAmount(0);
  setIsExpense(false);
}



  function deleteTransaction(id) {
    setTransactions(
      transactions.filter((item) => item.id !== id)
    );
  }




   function editTransaction(item) {
  setDescription(item.description);
  setAmount(item.amount);
  setEditingId(item.id);
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




const filteredTransactions = transactions.filter((item) => {
  if (filter === "all") {
    return true;
  }

  if (filter === "income") {
    return item.isExpense === false;
  }

  if (filter === "expense") {
    return item.isExpense === true;
  }
});

const searchedTransactions = filteredTransactions.filter((item) =>
  item.description.toLowerCase().includes(search.toLowerCase())
);

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



      <select
  value={category}
  onChange={(e) => setCategory(e.target.value)}
>
  <option value="Food">Food</option>
  <option value="Travel">Travel</option>
  <option value="Salary">Salary</option>
  <option value="Shopping">Shopping</option>
</select>
<p>Category: {category}</p>
<br /><br />



      
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
  {editingId ? "Update Transaction" : "Add Transaction"}
</button>


       <br />
      <br />



      <select
  value={filter}
  onChange={(e) => setFilter(e.target.value)}
>
  <option value="all">All</option>
  <option value="income">Income</option>
  <option value="expense">Expense</option>
</select>
<p>Filter: {filter}</p>

<br /><br />




<input
  type="text"
  placeholder="Search Transaction"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>
<p>Search: {search}</p>
<br /><br />

      
      {searchedTransactions.map((item) => (
        <div key={item.id}>



         <p>
  {item.isExpense ? "🔴 Expense" : "🟢 Income"} - {item.description} - ₹{item.amount} - {item.category}
</p>


        
<button onClick={() => editTransaction(item)}>
  Edit
</button>

    

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