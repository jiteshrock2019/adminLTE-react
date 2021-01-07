import React from "react";
import Dashboard from "./Dashboard";
import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";
function App() {
  return (
    <div class="wrapper">
        <Header />
        <Menu />
        <Dashboard />
        <Footer />
    </div>
  );
}

export default App;
