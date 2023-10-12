import { Route, HashRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
