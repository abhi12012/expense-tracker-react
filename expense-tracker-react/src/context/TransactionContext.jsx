import { createContext } from "react";

const TransactionContext = createContext();


function TransactionProvider({ children }) {

  const value = {
  name: "Abhishek"
};

  return (
    <TransactionContext.Provider value={value}>
      {children}
    </TransactionContext.Provider>
  );

}

export { TransactionProvider };
export default TransactionContext;