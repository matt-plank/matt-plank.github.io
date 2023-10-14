import { Link } from "react-router-dom";
import NavBar from "../components/nav/navbar";

const Articles = ({ articles }) => {
  return (
    <>
      <NavBar />

      <div className="flex flex-col gap-5">
        <h1 className="font-black text-gray-800 text-3xl text-center">
          Articles
        </h1>

        <div className="flex flex-col gap-5 items-center">
          {[...articles]
            .sort((a, b) => b.attributes.date.diff(a.attributes.date))
            .map((article, i) => (
              <div className="w-full max-w-2xl p-5" key={i}>
                <Link to={`/articles/${article.slug}`}>
                  <div className="flex justify-between">
                    <h2 className="font-bold hover:underline text-gray-800 cursor-pointer text-lg">
                      {article.attributes.title}
                    </h2>

                    <h2 className="text-lg text-gray-500">
                      {article.attributes.date.format("DD/MM/YYYY")}
                    </h2>
                  </div>
                </Link>
                <p>{article.attributes.description}</p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Articles;
