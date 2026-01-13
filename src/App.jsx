import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Tourist from "./pages/Tourists";
import Alerts from "./pages/Alerts";
import Reports from "./pages/Reports";
import RiskyZones from "./pages/RiskyZones";
import AppLayout from "./components/layout/AppLayout";
import { tourists, alerts, zones } from "./data/dummyData";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Dashboard tourists={tourists} alerts={alerts} zones={zones} />} />
            <Route path="tourists" element={<Tourist />} />
            <Route path="alerts" element={<Alerts />} />
            <Route path="reports" element={<Reports />} />
            <Route path="riskyzones" element={<RiskyZones />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
