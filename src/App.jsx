import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Tourist from "./pages/Tourists";
import Alerts from "./pages/Alerts";
import Reports from "./pages/Reports";
import RiskyZones from "./pages/RiskyZones";
import AppLayout from "./components/layout/AppLayout";

const App = () => {
  return (
    <>
      <Router>
        <AppLayout />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tourists" element={<Tourist />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/riskyzones" element={<RiskyZones />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
