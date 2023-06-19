import { useState } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom"
import Wo from "./pages/wo";
import Csh from "./pages/csh";

function App() {
  return (
    <div id="App">
        <Routes>
          <Route path="/" element={<Wo />}></Route>
          <Route path="/csh" element={<Csh />}></Route>
          <Route path="/seeting" element={<></>}></Route>
        </Routes>
    </div>
  );
}

export default App;
