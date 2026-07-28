import { useState, useEffect } from "react";

function useLocalStorage(key) {

  const [value, setValue] = useState(() => {

  try {

    const savedValue = localStorage.getItem(key);

    return savedValue
      ? JSON.parse(savedValue)
      : [];

  } catch (error) {

    return [];

  }

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