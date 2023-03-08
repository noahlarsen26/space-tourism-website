import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pages/Home";
import Crew from "./components/pages/crew/Crew";
import Technology from "./components/pages/technology/Technology";
import { Route, Routes } from "react-router-dom";
import Destination from "./components/pages/destination/Destination";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

function App() {
  const [sidebar, setSidebar] = useState(false);

  function openSidebarHandler() {
    setSidebar(true);
  }
  function closeSidebarHandler() {
    setSidebar(false);
  }

  return (
    <div className="App">
      <Navbar onClick={openSidebarHandler} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Destination/" element={<Destination />} />
        <Route path="/Crew" element={<Crew />} />
        <Route path="/Technology" element={<Technology />} />
      </Routes>
      {sidebar && <Sidebar onClick={closeSidebarHandler} />}
    </div>
  );
}

export default App;
