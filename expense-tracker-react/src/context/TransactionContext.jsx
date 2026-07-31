import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const TransactionContext = createContext();




function TransactionProvider({ children }) {

  const { value: transactions, setValue: setTransactions } =
    useLocalStorage("transactions");





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





function addTransaction(newTransaction) {

  setTransactions([
    ...transactions,
    newTransaction
  ]);

}




function updateTransaction(updatedTransaction) {

  setTransactions(
    transactions.map((item) => {

      if (item.id === updatedTransaction.id) {
        return updatedTransaction;
      }

      return item;

    })
  );

}







  const value = {
  name: "Abhishek",
  transactions,
  deleteTransaction,
  addTransaction,
  updateTransaction,
};

  return (
    <TransactionContext.Provider value={value}>
      {children}
    </TransactionContext.Provider>
  );

}

export { TransactionProvider };
export default TransactionContext;