import { Route, HashRouter as Router, Routes } from "react-router-dom";
import Articles from "./pages/articles";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/articles" exact element={<Articles />} />
      </Routes>
    </Router>
  );
}

export default App;
