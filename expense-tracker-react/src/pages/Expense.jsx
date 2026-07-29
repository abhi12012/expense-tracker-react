import { useState, useRef } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

import Dashboard from "../components/Dashboard";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";


function Expense() {

     const { value: transactions, setValue: setTransactions } =
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





function editTransaction(item) {

  setDescription(item.description);
  setAmount(item.amount);
  setEditingId(item.id);
  setCategory(item.category);
  setDate(item.date);
  setIsExpense(item.isExpense);

}




const income = transactions
  .filter((item) => item.isExpense === false)
  .reduce((total, item) => total + Number(item.amount), 0);


const expense = transactions
  .filter((item) => item.isExpense === true)
  .reduce((total, item) => total + Number(item.amount), 0);


const balance = income - expense;








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
      sortedTransactions={transactions}
      deleteTransaction={deleteTransaction}
      editTransaction={editTransaction}
    />


  </div>
);
}
export default Expense;