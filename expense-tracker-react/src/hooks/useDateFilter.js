import { useMemo } from "react";

function useDateFilter(categoryFilteredTransactions, dateFilter) {

  const dateFilteredTransactions = useMemo(() => {

    return categoryFilteredTransactions.filter((item) => {

      if (dateFilter === "All") {
        return true;
      }

      const transactionDate = new Date(item.date);
      const today = new Date();

      if (dateFilter === "Today") {
        return (
          transactionDate.toDateString() === today.toDateString()
        );
      }

      if (dateFilter === "This Month") {
        return (
          transactionDate.getMonth() === today.getMonth() &&
          transactionDate.getFullYear() === today.getFullYear()
        );
      }

      return false;

    });

  }, [categoryFilteredTransactions, dateFilter]);

  return dateFilteredTransactions;
}

export default useDateFilter;