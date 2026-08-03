function CategorySummary({ categorySummary }) {
  return (
    <div className="category-summary">

      <h3>Category Summary</h3>


      <div className="category-cards">

        {Object.entries(categorySummary).map(([category, total]) => (

          <div 
            key={category} 
            className="category-card"
          >

            <h4>
              {category === "Food" && "🍔"}
              {category === "Travel" && "✈️"}
              {category === "Salary" && "💰"}
              {category === "Shopping" && "🛍️"}

              {" "}
              {category}
            </h4>


            <p>
              ₹{total}
            </p>


          </div>

        ))}

      </div>

    </div>
  );
}

export default CategorySummary;