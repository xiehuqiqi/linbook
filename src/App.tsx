import { useState } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom"
import Wo from "./pages/wo";
import Csh from "./pages/csh";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Wo />}></Route>
          <Route path="/about" element={<Csh />}></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
