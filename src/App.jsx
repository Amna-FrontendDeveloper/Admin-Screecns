import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import UsersManagementPage from './Pages/UsersManagementPage';
import AnalyticsSection from "./Pages/AnalyticsSection";
import PaymentSection from './Pages/PaymentSection';
import Application from "./Pages/Application";
import ReviewModeration from "./Pages/ReviewModeration";

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<UsersManagementPage />} />
            <Route path="/users" element={<UsersManagementPage />} />
             <Route path="/analytics" element={<AnalyticsSection />} />
            <Route path="/payments" element={<PaymentSection />} />
            <Route path="/applications" element={<Application />} />
            <Route path="/reviews" element={<ReviewModeration />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
