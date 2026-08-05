

import DataManagement from "../components/DataManagement";

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




import { useState, useRef, useCallback, useContext } from "react";


import Dashboard from "../components/Dashboard";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";


function Expense() {

  

const { 
  transactions, 
  deleteTransaction,
  addTransaction: contextAddTransaction,
  updateTransaction: contextUpdateTransaction
} = useContext(TransactionContext);



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


    const [errors, setErrors] = useState({
  description: "",
  amount: "",
  date: "",
});



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







const addTransaction = useCallback(() => {

  if (description.trim() === "") {

  setErrors({
    ...errors,
    description: "Description is required"
  });

  return;
}


  // Edit mode
  if (editingId !== null) {

    const updatedTransaction = {
      id: editingId,
      description,
      amount,
      isExpense,
      category,
      date,
    };

    contextUpdateTransaction(updatedTransaction);

    clearForm();

    return;
  }


  // Add new transaction
  const newTransaction = {
    id: Date.now(),
    description,
    amount,
    isExpense,
    category,
    date,
  };


  contextAddTransaction(newTransaction);

  clearForm();


}, [
  description,
  amount,
  isExpense,
  category,
  date,
  editingId,
  contextAddTransaction,
  contextUpdateTransaction,
  clearForm
]);




const updateTransaction = useCallback(() => {

  const updatedTransaction = {
    id: editingId,
    description,
    amount,
    isExpense,
    category,
    date,
  };

  contextUpdateTransaction(updatedTransaction);

  clearForm();

}, [
  editingId,
  description,
  amount,
  isExpense,
  category,
  date,
  contextUpdateTransaction,
  clearForm
]);




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

      errors={errors}

      descriptionRef={descriptionRef}
    />



    <TransactionList
      sortedTransactions={sortedTransactions}
      editTransaction={editTransaction}
    />



    <DataManagement />




    <div className="stats-section">

  <div className="stat-card">
    <h3>Total Transactions</h3>
    <p>{transactions.length}</p>
  </div>


  <div className="stat-card">
    <h3>Today's Transactions</h3>
    <p>{todayTransactions.length}</p>
  </div>


  <div className="stat-card">
    <h3>Today's Income</h3>
    <p>₹{todayIncome}</p>
  </div>


  <div className="stat-card">
    <h3>Today's Expense</h3>
    <p>₹{todayExpense}</p>
  </div>


  <div className="stat-card">
    <h3>This Month Transactions</h3>
    <p>{thisMonthTransactions.length}</p>
  </div>


</div>



    <div className="filter-section">

       <div className="filter-row">


      <select
        value={categoryFilter}
        onChange={(e) => setCategoryFilter(e.target.value)}
      >

        <option value="All">
          All Categories
        </option>

        <option value="Food">
          Food
        </option>

        <option value="Travel">
          Travel
        </option>

        <option value="Salary">
          Salary
        </option>

        <option value="Shopping">
          Shopping
        </option>

      </select>


      <p>
        Category Filter: {categoryFilter}
      </p>




      <select
        value={dateFilter}
        onChange={(e) => setDateFilter(e.target.value)}
      >

        <option value="All">
          All Dates
        </option>

        <option value="Today">
          Today
        </option>

        <option value="This Month">
          This Month
        </option>

      </select>



      <p>
        Date Filter: {dateFilter}
      </p>



<input
  type="text"
  placeholder="Search Transaction"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>


      <p>
        Search: {search}
      </p>





      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >

        <option value="default">
          Default
        </option>

        <option value="low">
          Low to High
        </option>

        <option value="high">
          High to Low
        </option>

      </select>


      <p>
        Sort: {sortBy}
      </p>


    </div>




    <CategorySummary
      categorySummary={categorySummary}
    />



    <CategoryChart
      categorySummary={categorySummary}
    />

  </div>
  </div>

);
}
export default Expense;