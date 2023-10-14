import moment from "moment";
import NavBar from "../../components/nav/navbar";
import "./article.css";

const Article = ({ title, date, content }) => {
  return (
    <>
      <NavBar />

      <div className="flex flex-col gap-5 items-center">
        <div className="w-full max-w-2xl p-5 flex flex-col gap-5">
          <h1 className="font-black text-gray-800 text-3xl text-center">
            {title}
          </h1>
          <h2 className="text-gray-600 text-xl text-center">
            {moment(date).format("DD/MM/YYYY")}
          </h2>

          <div
            className="flex flex-col gap-5 article"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
    </>
  );
};

export default Article;
