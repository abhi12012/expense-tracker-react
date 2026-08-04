import { useState, useContext } from "react";
import TransactionContext from "../context/TransactionContext";


function DataManagement() {


    const { addTransaction: contextAddTransaction } =
  useContext(TransactionContext);

  const [selectedFile, setSelectedFile] = useState(null);



  const handleFileRead = () => {


    if (!selectedFile) {
      alert("Please select a CSV file");
      return;
    }


    const reader = new FileReader();


    reader.onload = (event) => {

      const csvText = event.target.result;


      const lines = csvText.split("\n");


     


      const header = lines[0];

      const dataRows = lines.slice(1);



      
      dataRows.forEach((row) => {

        console.log("ROW:", row);

  const values = row.split(",");


  const transaction = {

 id: crypto.randomUUID(),

  description: values[0],

  amount: Number(values[1]),

  category: values[2],

  date: values[3],

  isExpense: values[4].trim() === "true",

};

contextAddTransaction(transaction);

  
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

          

          const file = e.target.files[0];

         
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