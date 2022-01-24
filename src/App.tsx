import { Business } from "./pages/Business";
import { BusinessList } from "./components/business/BusinessList";
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/header/Header";
import { Sidebar } from "./components/sidebar/Sidebar";
import { PersonModal } from "./components/modals/person/PersonModal";
import { BusinessModal } from "./components/modals/business/BusinessModal";
import { BusinessDelete } from "./components/modals/business/BusinessDelete";
import { BusinessPerson } from "./components/business/BusinessPerson";

function App() {
  return (
    <div className="App">
      {/* <h1>Welcome to React Router!</h1> */}
      <Routes>
        <Route path="/" element={<Business />} />
        <Route path="/business/:id" element={<BusinessPerson />} />
        {/* <Route path="/business" element={<BusinessList />} /> */}
        {/* <Route path="/header" element={<Header />} />
        <Route path="/sidebar" element={<Sidebar />} /> */}
      </Routes>
    </div>
  );
}

export default App;
