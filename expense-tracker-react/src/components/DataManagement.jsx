import { useState } from "react";


function DataManagement() {


  const [selectedFile, setSelectedFile] = useState(null);



  const handleFileRead = () => {


  


    if (!selectedFile) {
      alert("Please select a CSV file");
      return;
    }



    const reader = new FileReader();



    reader.onload = (event) => {

      console.log(event.target.result);

    };



    reader.readAsText(selectedFile);


  };



  return (
    <div className="data-management">


      <h2>Data Management</h2>

      <h3>File Input Working</h3>



    <input
  type="file"
  accept=".csv"
  onChange={(e) => {

    console.log("FILE CHANGED");

    const file = e.target.files[0];

    console.log(file);

    setSelectedFile(file);

  }}
/>

      <p>
        {selectedFile ? selectedFile.name : "No file selected"}
      </p>




      <button onClick={handleFileRead}>
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