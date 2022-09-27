import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Customers from "./pages/Customers";
import Income from "./pages/Income";
import Promote from "./pages/Promote";
import Help from "./pages/Help";
import NF from "./pages/NF";
import Layout from './components/Layout';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="customers" element={<Customers />} />
          <Route path="income" element={<Income />} />
          <Route path="promote" element={<Promote />} />
          <Route path="help" element={<Help />} />
          <Route path="*" element={<NF />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
