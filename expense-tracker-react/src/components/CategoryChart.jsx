function CategoryChart({ categorySummary }) {
  return (
    <>
      <h3>Category Chart</h3>

      {Object.entries(categorySummary).map(([category, total]) => (
        <div key={category}>
          <p>{category}</p>

          <div
            style={{
              background:
                category === "Food"
                  ? "orange"
                  : category === "Travel"
                  ? "blue"
                  : category === "Salary"
                  ? "green"
                  : "purple",
              height: "20px",
              width: `${total / 10}px`,
            }}
          ></div>

          <p>₹{total}</p>

          <br />
        </div>
      ))}
    </>
  );
}

export default CategoryChart;