import { useState, useEffect } from "react";

function useLocalStorage(key) {

  const [value, setValue] = useState(() => {
  const savedValue = localStorage.getItem(key);

    return savedValue
  ? JSON.parse(savedValue)
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