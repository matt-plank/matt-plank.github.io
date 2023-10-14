import moment from "moment";
import { useEffect, useState } from "react";

const useArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const articlesContext = await import.meta.glob("../articles/*.md");
      const articleKeys = Object.keys(articlesContext);

      const articles = await Promise.all(
        articleKeys.map(async (key) => {
          const { attributes, html } = await articlesContext[key]();
          const slug = key.split("/").pop().replace(".md", "");

          attributes.date = moment(attributes.date);

          return {
            slug,
            attributes,
            html,
          };
        })
      );

      setArticles(articles);
    };

    getArticles();
  }, []);

  return articles;
};

export default useArticles;
