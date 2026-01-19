import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Tourist from "./pages/Tourists";
import Login from "./pages/Login";
import TouristDetail from "./pages/TouristDetail";
import Alerts from "./pages/Alerts";
import Reports from "./pages/Reports";
import RiskyZones from "./pages/RiskyZones";
import AppLayout from "./components/layout/AppLayout";
import { tourists, alerts, zones } from "./data/dummyData";
import { useState } from "react";

const App = () => {
  const [alertList, setAlertList] = useState(alerts);

  const updateAlertStatus = (alertId, newStatus) => {
    setAlertList(prev => prev.map(a => a.id === alertId ? { ...a, status: newStatus } : a) );
  };
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Dashboard tourists={tourists} alerts={alertList} zones={zones} updateAlertStatus={updateAlertStatus}/>} />
            <Route path="tourists" element={<Tourist tourists={tourists} />} />
            <Route path="tourists/:touristId" element={<TouristDetail tourists={tourists} alerts={alertList} />} />
            <Route path="alerts" element={<Alerts alerts={alertList} updateAlertStatus={updateAlertStatus}/>} />
            <Route path="reports" element={<Reports />} />
            <Route path="riskyzones" element={<RiskyZones />} />
          </Route>
          <Route path="login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
