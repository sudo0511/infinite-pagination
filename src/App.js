import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditEmployee from "./components/EditEmployee";
import Home from "./components/Home";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="App">
        <h2>React Hierarchy Assignment</h2>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employee/:id" element={<EditEmployee />} />
      </Routes>
    </Router>
  );
}

export default App;
