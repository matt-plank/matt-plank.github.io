import { Link } from "react-router-dom";
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
          <div className="w-full max-w-md p-5">
            <Link to="/articles/jiu-jitsu-notes">
              <div className="flex justify-between">
                <h2 className="font-bold hover:underline text-gray-800 cursor-pointer text-lg">
                  Jiu Jitsu Notes
                </h2>

                <h2 className="text-lg text-gray-500">13/10/2023</h2>
              </div>
            </Link>
            <p>
              In this article I&apos;ll discuss what{" "}
              <a href="https://jiujitsunotes.com/" className="text-red-700">
                Jiu Jitsu Notes
              </a>{" "}
              is, how it works, and the science behind it.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Articles;
