import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/layouts/layout";
import News from "./pages/News";
import Flights from "./pages/Flights";

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
