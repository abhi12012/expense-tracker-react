import { createContext, useReducer } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const TransactionContext = createContext();






const initialState = {
  transactions: []
};


function transactionReducer(state, action) {

  switch(action.type) {

    case "ADD_TRANSACTION":

      return {

            ...state,

             transactions: [
      ...state.transactions,
      action.payload
    ]

      };

  }

}






function TransactionProvider({ children }) {


  const { value: transactions, setValue: setTransactions } =
    useLocalStorage("transactions");


  const initialState = {
    transactions
  };


  const [state, dispatch] = useReducer(
    transactionReducer,
    initialState
  );

  



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

  setTransactions((prevTransactions) => [
    ...prevTransactions,
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