import TransactionContext from "../context/TransactionContext";


import CategorySummary from "../components/CategorySummary";
import CategoryChart from "../components/CategoryChart";

import useCategorySummary from "../hooks/useCategorySummary";
import useTransactionStats from "../hooks/useTransactionStats";
import useTransactionFilter from "../hooks/useTransactionFilter";
import useCategoryFilter from "../hooks/useCategoryFilter";
import useDateFilter from "../hooks/useDateFilter";
import useSearch from "../hooks/useSearch";
import useSort from "../hooks/useSort";
import useTodayStats from "../hooks/useTodayStats";




import { useState, useRef, useMemo, useCallback, useContext } from "react";


import Dashboard from "../components/Dashboard";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";


function Expense() {

  
const { transactions, setTransactions } =
  useContext(TransactionContext);
     
    const [description, setDescription] = useState("");

    const [amount, setAmount] = useState(0);

    const [category, setCategory] = useState("Food");

    const [date, setDate] = useState("");

    const [filter, setFilter] = useState("all");

    const [sortBy, setSortBy] = useState("default");

    const [search, setSearch] = useState("");

    const [dateFilter, setDateFilter] = useState("All");

    const [isExpense, setIsExpense] = useState(true);

    const [editingId, setEditingId] = useState(null);

    const [categoryFilter, setCategoryFilter] = useState("All");

    const descriptionRef = useRef();






    const clearForm = useCallback(() => {

  setDescription("");
  setAmount(0);
  setIsExpense(false);
  setCategory("Food");
  setDate("");
  setEditingId(null);

  if (descriptionRef.current) {
    descriptionRef.current.focus();
  }

}, []);







function addTransaction() {
  // Validation
  if (description.trim() === "" || amount <= 0) {
    alert("Please enter description and amount.");







    return;
  }

  

if (editingId !== null) {
  updateTransaction();
  return;
}



  
  const newTransaction = {
    id: Date.now(),
    description,
    amount,
    isExpense,
    category,
    date,
  };

  setTransactions([...transactions, newTransaction]);


  clearForm();
}





function updateTransaction() {

  setTransactions(
    transactions.map((item) => {

      if (item.id === editingId) {
        return {
          ...item,
          description,
          amount,
          isExpense,
          category,
          date,
        };
      }

      return item;

    })
  );

  clearForm();

}




function deleteTransaction(id) {

  const confirmDelete = window.confirm(
    "Are you sure you want to delete this transaction?"
  );

  if (!confirmDelete) {
    return;
  }

  setTransactions(
    transactions.filter((item) => item.id !== id)
  );
}





const editTransaction = useCallback((item) => {

  setDescription(item.description);
  setAmount(item.amount);
  setEditingId(item.id);
  setCategory(item.category);
  setDate(item.date);
  setIsExpense(item.isExpense);

}, []);



const { income, expense, balance } =
  useTransactionStats(transactions);




const filteredTransactions =
  useTransactionFilter(transactions, filter);





const categoryFilteredTransactions =
  useCategoryFilter(filteredTransactions, categoryFilter);



const dateFilteredTransactions =
  useDateFilter(categoryFilteredTransactions, dateFilter);






const searchedTransactions =
  useSearch(dateFilteredTransactions, search);








const sortedTransactions =
  useSort(searchedTransactions, sortBy);








const {
  todayTransactions,
  todayIncome,
  todayExpense,
} = useTodayStats(transactions);







  const today = new Date();

const thisMonthTransactions = transactions.filter((item) => {
  const transactionDate = new Date(item.date);

  return (
    transactionDate.getMonth() === today.getMonth() &&
    transactionDate.getFullYear() === today.getFullYear()
  );
});






const categorySummary = useCategorySummary(transactions);





  return (

   

    
  <div className="container">

    <h1>Expense Tracker</h1>

    <Dashboard
      balance={balance}
      income={income}
      expense={expense}
      totalTransactions={transactions.length}
    >
      <h3>Welcome to Expense Tracker</h3>
      <p>React Learning Day 🚀</p>
    </Dashboard>


    <TransactionForm
      description={description}
      setDescription={setDescription}

      amount={amount}
      setAmount={setAmount}

      category={category}
      setCategory={setCategory}

      date={date}
      setDate={setDate}

      isExpense={isExpense}
      setIsExpense={setIsExpense}

      addTransaction={addTransaction}

      editingId={editingId}

      descriptionRef={descriptionRef}
    />


    <TransactionList
  sortedTransactions={sortedTransactions}
  deleteTransaction={deleteTransaction}
  editTransaction={editTransaction}
/>



    <p>Total Transactions: {transactions.length}</p>
<p>Today's Transactions: {todayTransactions.length}</p>
<p>Today's Income: ₹{todayIncome}</p>
<p>Today's Expense: ₹{todayExpense}</p>

<p>This Month Transactions: {thisMonthTransactions.length}</p>






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





<select
  value={dateFilter}
  onChange={(e) => setDateFilter(e.target.value)}
>
  <option value="All">All Dates</option>
  <option value="Today">Today</option>
  <option value="This Month">This Month</option>
</select>

<p>Date Filter: {dateFilter}</p>

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



<CategorySummary
  categorySummary={categorySummary}
/>




<CategoryChart
  categorySummary={categorySummary}
/>


  </div>





);
}
export default Expense;