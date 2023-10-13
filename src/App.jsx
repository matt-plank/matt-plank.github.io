import { Route, HashRouter as Router, Routes } from "react-router-dom";
import Articles from "./pages/articles";
import JiuJitsuNotes from "./pages/articles/jiuJitsuNotes";
import Contact from "./pages/contact";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/articles" exact element={<Articles />} />
        <Route
          path="/articles/jiu-jitsu-notes"
          exact
          element={<JiuJitsuNotes />}
        />
      </Routes>
    </Router>
  );
}

export default App;
