function CategoryChart({ categorySummary }) {
  return (
    <div className="category-chart">

      <h3>Category Chart</h3>


      <div className="chart-container">

        {Object.entries(categorySummary).map(([category, total]) => (

          <div 
            key={category} 
            className="chart-item"
          >

            <div className="chart-title">
              <p>{category}</p>
              <p>₹{total}</p>
            </div>


            <div className="bar-background">

              <div
                className="bar"
                style={{
                  width: `${total / 10}px`
                }}
              ></div>

            </div>


          </div>

        ))}

      </div>


    </div>
  );
}

export default CategoryChart;