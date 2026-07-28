import { useState, useEffect } from "react";

function useLocalStorage() {

  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem("transactions");

    return savedTransactions
      ? JSON.parse(savedTransactions)
      : [];
  });


  useEffect(() => {
    localStorage.setItem(
      "transactions",
      JSON.stringify(transactions)
    );
  }, [transactions]);


  return {
    transactions,
    setTransactions
  };

}

export default useLocalStorage;