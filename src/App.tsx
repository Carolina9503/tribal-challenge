import { BusinessList } from "./pages/business/BusinessList";
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { BusinessPerson } from "./pages/business/BusinessPerson";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BusinessList />} />
        <Route path="/business/:id" element={<BusinessPerson />} />
      </Routes>
    </div>
  );
}

export default App;
