import { Route, HashRouter as Router, Routes } from "react-router-dom";
import { attributes, html } from "./articles/jiu-jitsu-notes.md";
import Article from "./pages/article/article";
import Articles from "./pages/articles";
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
          element={
            <Article
              title={attributes.title}
              date={attributes.date}
              content={html}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
