function TransactionForm({
  description,
  setDescription,
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
    </>
  );
}

export default TransactionForm;