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
  editingId

}) {
  return (
    <>
      <h2>Transaction Form</h2>

      <input
  type="text"
  placeholder="Description"
  value={description}
  onChange={(e) => setDescription(e.target.value)}
/>




<br />
      <br />


<input
  type="number"
  placeholder="Amount"
  value={amount}
  onChange={(e) => setAmount(Number(e.target.value))}
/>


<br />
      <br />


<select
  value={category}
  onChange={(e) => setCategory(e.target.value)}
>
  <option value="Food">Food</option>
  <option value="Travel">Travel</option>
  <option value="Salary">Salary</option>
  <option value="Shopping">Shopping</option>
</select>


<br />
      <br />




<input
  type="date"
  value={date}
  onChange={(e) => setDate(e.target.value)}
/>
<p>Date: {date}</p>






<br />
      <br />

       
      <label>
  <input
    type="checkbox"
    checked={isExpense}
    onChange={(e) => setIsExpense(e.target.checked)}
  />
  Expense
</label>

 <p>Expense: {isExpense.toString()}</p>





      <button onClick={addTransaction}>
  {editingId ? "Update Transaction" : "Add Transaction"}
</button>


       <br />
      <br />


<br /><br />



    </>


  );
}

export default TransactionForm;