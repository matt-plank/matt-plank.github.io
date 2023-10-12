import { Route, HashRouter as Router, Routes } from "react-router-dom";
import Articles from "./pages/articles";
import Contact from "./pages/contact";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/articles" exact element={<Articles />} />
        <Route path="/contact" exact element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
