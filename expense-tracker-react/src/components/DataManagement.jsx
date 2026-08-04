import { useState } from "react";


function DataManagement() {


  const [selectedFile, setSelectedFile] = useState(null);



  const handleFileRead = () => {


    if (!selectedFile) {
      alert("Please select a CSV file");
      return;
    }


    const reader = new FileReader();

console.log("FILE READING STARTED");

    reader.onload = (event) => {

      const csvText = event.target.result;


      const lines = csvText.split("\n");


      console.log(lines);



      const header = lines[0];

      const dataRows = lines.slice(1);



      console.log("HEADER:", header);

      console.log("DATA:", dataRows);


      dataRows.forEach((row) => {

  const values = row.split(",");


  const transaction = {

  id: Date.now(),

  description: values[0],

  amount: Number(values[1]),

  category: values[2],

  date: values[3],

  isExpense: values[4].trim() === "true",

};

console.log(transaction);

  console.log(values);


  
});


    };


    reader.readAsText(selectedFile);


  };   // 👈 यही missing था



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