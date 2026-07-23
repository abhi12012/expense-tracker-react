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
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [date, setDate] = useState("");
  const [dateFilter, setDateFilter] = useState("All");
  const [sortBy, setSortBy] = useState("default");





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
    setDate(item.date);

    return;
  }

  // Add New Transaction
  const newTransaction = {
    id: Date.now(),
    description,
    amount,
    isExpense,
    category,
    date,
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
  setCategory(item.category);
  setDate(item.date);
   }



 

  useEffect(() => {
  localStorage.setItem(
    "transactions",
    JSON.stringify(transactions)
  );
}, [transactions]);





const todayTransactions = transactions.filter((item) => {
  const transactionDate = new Date(item.date);
  const today = new Date();

  return transactionDate.toDateString() === today.toDateString();
});




const todayIncome = todayTransactions
  .filter((item) => item.isExpense === false)
  .reduce((total, item) => total + item.amount, 0);



  const todayExpense = todayTransactions
  .filter((item) => item.isExpense === true)
  .reduce((total, item) => total + item.amount, 0);





  const categorySummary = transactions.reduce((acc, item) => {
  if (!acc[item.category]) {
    acc[item.category] = 0;
  }

  acc[item.category] += item.amount;

  return acc;
}, {});



const today = new Date();

const thisMonthTransactions = transactions.filter((item) => {
  const transactionDate = new Date(item.date);

  return (
    transactionDate.getMonth() === today.getMonth() &&
    transactionDate.getFullYear() === today.getFullYear()
  );
});







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



const categoryFilteredTransactions = filteredTransactions.filter((item) => {
  if (categoryFilter === "All") {
    return true;
  }

  return item.category === categoryFilter;
});






const dateFilteredTransactions = categoryFilteredTransactions.filter((item) => {

  if (dateFilter === "All") {
    return true;
  }

  const transactionDate = new Date(item.date);
  const today = new Date();

  if (dateFilter === "Today") {
    return transactionDate.toDateString() === today.toDateString();
  }

  if (dateFilter === "This Month") {
    return (
      transactionDate.getMonth() === today.getMonth() &&
      transactionDate.getFullYear() === today.getFullYear()
    );
  }

});




const searchedTransactions = dateFilteredTransactions.filter((item) =>
  item.description.toLowerCase().includes(search.toLowerCase())
);




const sortedTransactions = [...searchedTransactions];

if (sortBy === "low") {
  sortedTransactions.sort((a, b) => a.amount - b.amount);
}

if (sortBy === "high") {
  sortedTransactions.sort((a, b) => b.amount - a.amount);
}





  return (
    <>
      <h1>Expense Tracker</h1>

      <h2>Balance: ₹{balance}</h2>
      <p>Total Transactions: {transactions.length}</p>
      <p>Today's Transactions: {todayTransactions.length}</p>
      <p>Today's Income: ₹{todayIncome}</p>
      <p>Today's Expense: ₹{todayExpense}</p>


      <h2>Income: ₹{income}</h2>



    <h2>Expense: ₹{expense}</h2>

     
     <p>This Month Transactions: {thisMonthTransactions.length}</p>


      <h3>Category Summary</h3>

{Object.entries(categorySummary).map(([category, total]) => (
  <p key={category}>
  {category === "Food" && "🍔"}
  {category === "Travel" && "✈️"}
  {category === "Salary" && "💰"}
  {category === "Shopping" && "🛍️"}

  {" "}{category}: ₹{total}
</p>
))}






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




<input
  type="date"
  value={date}
  onChange={(e) => setDate(e.target.value)}
/>
<p>Date: {date}</p>

<br /><br />




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



<select
  value={categoryFilter}
  onChange={(e) => setCategoryFilter(e.target.value)}
>
  <option value="All">All Categories</option>
  <option value="Food">Food</option>
  <option value="Travel">Travel</option>
  <option value="Salary">Salary</option>
  <option value="Shopping">Shopping</option>
</select>
<p>Category Filter: {categoryFilter}</p>

<br /><br />






<select
  value={dateFilter}
  onChange={(e) => setDateFilter(e.target.value)}
>
  <option value="All">All Dates</option>
  <option value="Today">Today</option>
  <option value="This Month">This Month</option>
</select>

<p>Date Filter Value: {dateFilter}</p>

<br /><br />



<input
  type="text"
  placeholder="Search Transaction"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>
<p>Search: {search}</p>
<br /><br />





<select
  value={sortBy}
  onChange={(e) => setSortBy(e.target.value)}
>
  <option value="default">Default</option>
  <option value="low">Low to High</option>
  <option value="high">High to Low</option>
</select>

<p>Sort: {sortBy}</p>

<br /><br />





      


      {sortedTransactions.map((item) => (
        <div key={item.id}>


<p>
  {item.isExpense ? "🔴 Expense" : "🟢 Income"} - {item.description} - ₹{item.amount} - {item.category} - {item.date}
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