function DataManagement() {

  return (
    <div className="data-management">

      <h2>Data Management</h2>

      

      <input
  type="file"
  accept=".csv"
/>



      <input
  type="file"
  accept=".csv"
/>


      <button>
        Export CSV
      </button>

      <button>
        Backup Data
      </button>

      <button>
        Restore Backup
      </button>

    </div>
  );
}

export default DataManagement;