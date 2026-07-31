import { useMemo } from "react";

function useTransactionFilter(transactions, filter) {

  const filteredTransactions = useMemo(() => {

    return transactions.filter((item) => {

      if (filter === "all") {
        return true;
      }

      if (filter === "income") {
        return item.isExpense === false;
      }

      if (filter === "expense") {
        return item.isExpense === true;
      }

      return false;

    });

  }, [transactions, filter]);

  return filteredTransactions;
}

export default useTransactionFilter;