import { useState } from "react";


function DataManagement() {


    const [selectedFile, setSelectedFile] = useState(null);

     const handleFileRead = () => {

  const reader = new FileReader();

};

  return (
    <div className="data-management">

      <h2>Data Management</h2>



      <input
  type="file"
  accept=".csv"
  onChange={(e) => setSelectedFile(e.target.files[0])}
/>

<p>
  {selectedFile ? selectedFile.name : "No file selected"}
</p>




<button>
        Import CSV
      </button>



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