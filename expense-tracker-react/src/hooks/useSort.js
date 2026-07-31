import { useMemo } from "react";

function useSort(searchedTransactions, sortBy) {

  const sortedTransactions = useMemo(() => {

    const sorted = [...searchedTransactions];

    if (sortBy === "low") {
      sorted.sort(
        (a, b) => Number(a.amount) - Number(b.amount)
      );
    }

    if (sortBy === "high") {
      sorted.sort(
        (a, b) => Number(b.amount) - Number(a.amount)
      );
    }

    return sorted;

  }, [searchedTransactions, sortBy]);

  return sortedTransactions;

}

export default useSort;