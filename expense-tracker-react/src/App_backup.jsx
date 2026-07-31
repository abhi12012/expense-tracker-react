
import Expense from "./pages/Expense";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { useState, useEffect, useRef, useMemo } from "react";
import useLocalStorage from "./hooks/useLocalStorage";

import "./App.css";
import Dashboard from "./components/Dashboard";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";




function App() {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);


  const [isExpense, setIsExpense] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Food");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [date, setDate] = useState("");
  const [dateFilter, setDateFilter] = useState("All");
  const [sortBy, setSortBy] = useState("default");
  const descriptionRef = useRef(null);
  





  const { value: transactions, setValue: setTransactions } =
  useLocalStorage("transactions");




  function clearForm() {

    setDescription("");
    setAmount(0);
    setIsExpense(false);
    setCategory("Food");
    setDate("");


    descriptionRef.current.focus();
}




function updateTransaction() {

  setTransactions(
    transactions.map((item) => {

      if (item.id === editingId) {
        return {
          ...item,
          description: description,
          amount: amount,
          isExpense: isExpense,
          category: category,
          date: date,
        };
      }

      return item;

    })
  );

  setEditingId(null);

}



  function addTransaction() {
  // Validation
  if (description.trim() === "" || amount <= 0) {
    alert("Please enter description and amount.");
    return;
  }

  

  // Edit Mode
  if (editingId !== null) {
  updateTransaction();
  return;
}

  const newTransaction = {
  id: Date.now(),
  description,
  amount: Number(amount),
  isExpense,
  category,
  date,
};

  setTransactions([...transactions, newTransaction]);

  // Clear Inputs
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




   function editTransaction(item) {
    
 setDescription(item.description);
  setAmount(item.amount);
  setEditingId(item.id);
  setCategory(item.category);
  setDate(item.date);
  setIsExpense(item.isExpense);
   }



 

  



useEffect(() => {
  if (editingId !== null) {
    descriptionRef.current.focus();
  }
}, [editingId]);





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







  const income = useMemo(() => {

  return transactions
    .filter((item) => item.isExpense === false)
    .reduce((total, item) => total + item.amount, 0);

}, [transactions]);




const expense = useMemo(() => {

  return transactions
    .filter((item) => item.isExpense === true)
    .reduce((total, item) => total + item.amount, 0);

}, [transactions]);





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
  sortedTransactions.sort(
    (a, b) => Number(a.amount) - Number(b.amount)
  );
}

if (sortBy === "high") {
  sortedTransactions.sort(
    (a, b) => Number(b.amount) - Number(a.amount)
  );
}




  return (
  <>
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/expense" element={<Expense />} />
    </Routes>
  </>
);
}
export default App;