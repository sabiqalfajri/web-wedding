import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./utils/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import First from "./utils/FirstContent";
import { Row, Col } from "react-bootstrap";

const App = () => {
  return (
    <>
      <Router>
        <Row>
          <Col md={8} className="left-section d-none d-md-block">
            <First />
          </Col>

          <Col xs={12} md={4} className="right-section">
            <Routes>
              <Route path="/mail-asih/:name" element={<Home />} />
            </Routes>
          </Col>
        </Row>
      </Router>
    </>
  );
};

export default App;
