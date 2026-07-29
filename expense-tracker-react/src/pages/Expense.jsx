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

}




  return (
    <div>
      <h1>Expense Tracker Page</h1>
      <p>Manage your transactions here</p>
    </div>
  );
}

export default Expense;