function CategorySummary({ categorySummary }) {
  return (
    <>
      <h3>Category Summary</h3>

      {Object.entries(categorySummary).map(([category, total]) => (
        <p key={category}>
          {category === "Food" && "🍔"}
          {category === "Travel" && "✈️"}
          {category === "Salary" && "💰"}
          {category === "Shopping" && "🛍️"}

          {" "}
          {category}: ₹{total}
        </p>
      ))}
    </>
  );
}

export default CategorySummary;