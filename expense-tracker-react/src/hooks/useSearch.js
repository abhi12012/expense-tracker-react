import { useMemo } from "react";

function useSearch(dateFilteredTransactions, search) {

  const searchedTransactions = useMemo(() => {

    return dateFilteredTransactions.filter((item) =>
      item.description
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  }, [dateFilteredTransactions, search]);

  return searchedTransactions;

}

export default useSearch;