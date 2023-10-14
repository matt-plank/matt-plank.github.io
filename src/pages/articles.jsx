import moment from "moment";
import { Link } from "react-router-dom";
import { attributes } from "../articles/jiu-jitsu-notes.md";
import NavBar from "../components/nav/navbar";

const Articles = () => {
  return (
    <>
      <NavBar />

      <div className="flex flex-col gap-5">
        <h1 className="font-black text-gray-800 text-3xl text-center">
          Articles
        </h1>

        <div className="flex flex-col gap-5 items-center">
          <div className="w-full max-w-2xl p-5">
            <Link to="/articles/jiu-jitsu-notes">
              <div className="flex justify-between">
                <h2 className="font-bold hover:underline text-gray-800 cursor-pointer text-lg">
                  {attributes.title}
                </h2>

                <h2 className="text-lg text-gray-500">
                  {moment(attributes.date).format("DD/MM/YYYY")}
                </h2>
              </div>
            </Link>
            <p>{attributes.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Articles;
