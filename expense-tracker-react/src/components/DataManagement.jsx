import { useState, useContext } from "react";
import TransactionContext from "../context/TransactionContext";


function DataManagement() {


  const { 
  transactions,
  addTransaction: contextAddTransaction,
  restoreTransactions
} = useContext(TransactionContext);



  const [selectedFile, setSelectedFile] = useState(null);

  const [backupFile, setBackupFile] = useState(null);



  const exportCSV = () => {

   

    

    const header = "description,amount,category,date,isExpense";


    const rows = transactions.map((transaction) => {

  return [
    transaction.description,
    transaction.amount,
    transaction.category,
    transaction.date,
    transaction.isExpense
  ].join(",");

});


const csvContent = [
  header,
  ...rows
].join("\n");





const blob = new Blob([csvContent], {
  type: "text/csv"
});



const url = URL.createObjectURL(blob);






const link = document.createElement("a");

link.href = url;

link.download = "transactions.csv";

link.style.display = "none";

document.body.appendChild(link);

link.click();

document.body.removeChild(link);


URL.revokeObjectURL(url);

  };




  const handleFileRead = () => {


    if (!selectedFile) {
      alert("Please select a CSV file");
      return;
    }


    const reader = new FileReader();






    reader.onload = (event) => {


      const csvText = event.target.result;


  const restoredTransactions = JSON.parse(jsonData);


  


 setTransactions(restoredTransactions);




      const lines = csvText.split("\n");


      const header = lines[0];


      const dataRows = lines.slice(1);



      dataRows.forEach((row) => {


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


  };





   const backupData = () => {

  const jsonData = JSON.stringify(transactions);




  const blob = new Blob([jsonData], {
    type: "application/json"
  });


  const url = URL.createObjectURL(blob);


  const link = document.createElement("a");

  link.href = url;

  link.download = "backup.json";


  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);


  URL.revokeObjectURL(url);

};





const restoreBackup = () => {

  const reader = new FileReader();


  reader.onload = (event) => {

    const jsonData = event.target.result;


    const restoredTransactions = JSON.parse(jsonData);


    


    restoreTransactions(restoredTransactions);

  };


  reader.readAsText(backupFile);

};


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


    <button onClick={exportCSV}>
      Export CSV
    </button>


    <button onClick={backupData}>
  Backup Data
</button>




<input
  type="file"
  accept=".json"
  onChange={(e) => {

    const file = e.target.files[0];

    setBackupFile(file);

  }}
/>




<button onClick={restoreBackup}>
  Restore Backup
</button>
  </div>
);
}


export default DataManagement;