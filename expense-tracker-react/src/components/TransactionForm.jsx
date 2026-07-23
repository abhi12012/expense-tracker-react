function TransactionForm({
  description,
  setDescription,
  amount,
  setAmount,
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
    </>


  );
}

export default TransactionForm;