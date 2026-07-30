import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const TransactionContext = createContext();


function TransactionProvider({ children }) {

  const { value: transactions, setValue: setTransactions } =
    useLocalStorage("transactions");

  const value = {
    name: "Abhishek",
    transactions,
    setTransactions,
  };

  return (
    <TransactionContext.Provider value={value}>
      {children}
    </TransactionContext.Provider>
  );

}
export { TransactionProvider };
export default TransactionContext;