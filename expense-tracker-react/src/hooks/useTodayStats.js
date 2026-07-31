import { useMemo } from "react";

function useTodayStats(transactions) {

  const todayStats = useMemo(() => {

    const todayTransactions = transactions.filter((item) => {

      const transactionDate = new Date(item.date);
      const today = new Date();

      return (
        transactionDate.toDateString() === today.toDateString()
      );

    });

    const todayIncome = todayTransactions
      .filter((item) => item.isExpense === false)
      .reduce((total, item) => total + Number(item.amount), 0);

    const todayExpense = todayTransactions
      .filter((item) => item.isExpense === true)
      .reduce((total, item) => total + Number(item.amount), 0);

    return {
      todayTransactions,
      todayIncome,
      todayExpense,
    };

  }, [transactions]);

  return todayStats;

}

export default useTodayStats;