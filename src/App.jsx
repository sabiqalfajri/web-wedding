import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./utils/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/:name" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
