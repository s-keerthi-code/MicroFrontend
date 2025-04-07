import React from "react";
import UserMenu from "./UserIcon";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Orders from "./pages/Orders";
import Settings from "./pages/Settings";
import Payments from "./pages/Payments";

export default function App() {
  return (
    <BrowserRouter>
      {/* Routes */}
      <Routes>
        <Route path="/orders" element={<Orders />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/" element={<UserMenu />} />
      </Routes>
    </BrowserRouter>
  );
}
