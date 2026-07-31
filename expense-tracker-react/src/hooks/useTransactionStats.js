import { useMemo } from "react";

function useTransactionStats(transactions) {

  const income = useMemo(() => {
    return transactions
      .filter((item) => item.isExpense === false)
      .reduce((total, item) => total + Number(item.amount), 0);
  }, [transactions]);

  const expense = useMemo(() => {
    return transactions
      .filter((item) => item.isExpense === true)
      .reduce((total, item) => total + Number(item.amount), 0);
  }, [transactions]);

  const balance = useMemo(() => {
    return income - expense;
  }, [income, expense]);

  return {
    income,
    expense,
    balance,
  };
}

export default useTransactionStats;