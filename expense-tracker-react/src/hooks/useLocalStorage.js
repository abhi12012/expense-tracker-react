import { useState, useEffect } from "react";

function useLocalStorage(key) {

  const [value, setValue] = useState(() => {
    const savedTransactions = localStorage.getItem(key);

    return savedTransactions
      ? JSON.parse(savedTransactions)
      : [];
  });


  useEffect(() => {
    localStorage.setItem(
      key,
      JSON.stringify(value)
    );
  }, [key, value]);


  return {
    value,
    setValue
  };

}

export default useLocalStorage;