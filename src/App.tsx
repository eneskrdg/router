import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Meals from "./pages/meals";
import Upgrade from "./pages/upgrade";
import Payments from "./pages/payment";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meals" element={<Meals />} />
        <Route path="/upgrade" element={<Upgrade />} />
        <Route path="/payment" element={<Payments />} />
      </Routes>
    </Router>
  );
}

export default App;
