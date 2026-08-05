import React from "react";

function TransactionForm({
  description,
  setDescription,
  amount,
  setAmount,
  category,
setCategory,
date,
setDate,
isExpense,
setIsExpense,
addTransaction,
  editingId,
  descriptionRef,
  errors,


}) {


  function handleSubmit(event) {
    event.preventDefault();

  }

  
  return (

    
    <form onSubmit={handleSubmit}>



      <h2>Transaction Form</h2>




    <div className="form-group">

      <input
       ref={descriptionRef}
  type="text"
  placeholder="Description"
  value={description}
  onChange={(e) => setDescription(e.target.value)}
/>
<div style={{ color: "red" }}>
  {errors.description}
</div>



</div>






<div className="form-group">
<input
  type="number"
  placeholder="Amount"
  value={amount}
  onChange={(e) => setAmount(Number(e.target.value))}
/>
</div>






<div className="form-group">
<select
  value={category}
  onChange={(e) => setCategory(e.target.value)}
>
  <option value="Food">Food</option>
  <option value="Travel">Travel</option>
  <option value="Salary">Salary</option>
  <option value="Shopping">Shopping</option>
</select>

</div>




<div className="form-group">

<input
  type="date"
  value={date}
  onChange={(e) => setDate(e.target.value)}
/>


</div>





       

    <div className="form-group">

      <label>
  <input
    type="checkbox"
    checked={isExpense}
    onChange={(e) => setIsExpense(e.target.checked)}
  />
  Expense
</label>

 

</div>



      <button onClick={addTransaction}>
  {editingId ? "Update Transaction" : "Add Transaction"}
</button>


       





   </form>


  );
}

export default React.memo(TransactionForm);