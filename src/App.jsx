import { Route, HashRouter as Router, Routes } from "react-router-dom";
import useArticles from "./hooks/useArticles";
import Article from "./pages/article/article";
import Articles from "./pages/articles";
import Contact from "./pages/contact";
import Home from "./pages/home";

function App() {
  const articles = useArticles();

  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route
          path="/articles"
          exact
          element={<Articles articles={articles} />}
        />

        {articles.map((article, i) => {
          return (
            <Route
              key={i}
              path={`/articles/${article.slug}`}
              exact
              element={
                <Article
                  title={article.attributes.title}
                  date={article.attributes.date}
                  content={article.html}
                />
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
