function useCategorySummary(transactions) {

  const categorySummary = transactions.reduce((acc, item) => {

    if (!acc[item.category]) {
      acc[item.category] = 0;
    }

    acc[item.category] += Number(item.amount);

    return acc;

  }, {});

  return categorySummary;

}

export default useCategorySummary;