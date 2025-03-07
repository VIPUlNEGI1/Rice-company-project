import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./conponents/Navbar";
import About from "./pages/About";
import Product from "./pages/Product";
import BulkOrderEnquiry from "./pages/BulkOrderEnquiry";
import ContactUs from "./pages/ContactUs";
import HomePage from "./conponents/HomePage";
import Footer from "./conponents/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
   
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/bulk-order-enquiry" element={<BulkOrderEnquiry />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/" element={<HomePage />} />
 
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
