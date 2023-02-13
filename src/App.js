import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pages/Home";
import Crew from "./components/pages/crew/Crew";
import Technology from "./components/pages/technology/Technology";
import { Route, Routes } from "react-router-dom";
import Destination from "./components/pages/destination/Destination";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Destination/" element={<Destination />} />
        <Route path="/Crew" element={<Crew />} />
        <Route path="/Technology" element={<Technology />} />
      </Routes>
    </div>
  );
}

export default App;
