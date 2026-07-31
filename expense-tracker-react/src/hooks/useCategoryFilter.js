import { useMemo } from "react";

function useCategoryFilter(filteredTransactions, categoryFilter) {

  const categoryFilteredTransactions = useMemo(() => {

    return filteredTransactions.filter((item) => {

      if (categoryFilter === "All") {
        return true;
      }

      return item.category === categoryFilter;

    });

  }, [filteredTransactions, categoryFilter]);

  return categoryFilteredTransactions;
}

export default useCategoryFilter;