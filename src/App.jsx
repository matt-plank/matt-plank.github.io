import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function App() {
  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="h-28"></div>

        <h1 className="font-black text-gray-800 text-5xl text-center">
          Matt <br className="md:hidden" />
          Plank
        </h1>
        <h2 className="text-gray-800 text-2xl text-center">
          Full Stack Engineer
        </h2>

        <div className="flex justify-center gap-5">
          <FaGithubSquare className="cursor-pointer text-4xl text-gray-800" />
          <MdEmail className="cursor-pointer text-4xl text-gray-800" />
          <FaLinkedin className="cursor-pointer text-4xl text-gray-800" />
        </div>

        <div className="h-28"></div>
      </div>
    </>
  );
}

export default App;
