import Counter from "./components/Counter";


import Navbar from "./components/Navbar";


import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Expense from "./pages/Expense";

import "./App.css";


function App() {

  return (

    <>
    <Navbar />


    <Routes>

      <Route 
        path="/" 
        element={<Home />} 
      />

      <Route 
        path="/expense" 
        element={<Expense />} 
      />


      <Route
  path="/counter"
  element={<Counter />}
/>

    </Routes>

        </>
  );

}

export default App;