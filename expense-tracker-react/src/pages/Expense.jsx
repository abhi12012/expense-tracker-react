import { useState, useRef } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

import Dashboard from "../components/Dashboard";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";


function Expense() {

     const [transactions, setTransactions] =
    useLocalStorage("transactions");

    const [description, setDescription] = useState("");

    const [amount, setAmount] = useState(0);

    const [category, setCategory] = useState("Food");

    const [date, setDate] = useState("");

    const [isExpense, setIsExpense] = useState(true);

    const [editingId, setEditingId] = useState(null);

    const descriptionRef = useRef();


    function clearForm() {

  setDescription("");
  setAmount(0);
  setIsExpense(false);
  setCategory("Food");
  setDate("");
  setEditingId(null);

  if (descriptionRef.current) {
    descriptionRef.current.focus();
  }

}








function addTransaction() {
  // Validation
  if (description.trim() === "" || amount <= 0) {
    alert("Please enter description and amount.");
    return;
  }

  

//   // Edit Mode
//   if (editingId !== null) {
//     updateTransaction();
//     return;
//   }

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





function editTransaction(item) {

  setDescription(item.description);
  setAmount(item.amount);
  setEditingId(item.id);
  setCategory(item.category);
  setDate(item.date);
  setIsExpense(item.isExpense);

}




  return (
    <div>
      <h1>Expense Tracker Page</h1>
      <p>Manage your transactions here</p>
    </div>
  );
}

export default Expense;