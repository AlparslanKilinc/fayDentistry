import "./styles/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import DrFay from "./pages/DrFay";

function App() {
    return (
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home/>} exact />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/dr-fay" element={<DrFay />} />
          </Routes>
        </Layout>
      </Router>
    );
}

export default App;
