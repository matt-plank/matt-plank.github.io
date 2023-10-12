import { AiFillEye } from "react-icons/ai";
import { FaGithub, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Card from "./components/card";

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

      <div className="flex flex-wrap gap-10 justify-center">
        <Card img="https://images.pexels.com/photos/5616809/pexels-photo-5616809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
          <h3 className="font-bold text-2xl">Jiu Jitsu Notes</h3>
          <p className="text-lg">
            A note taking app for Jiu Jitsu practitioners to keep track of their
            training.
          </p>

          <div className="flex flex-wrap gap-2">
            <a
              href="https://jiujitsunotes.com"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-gray-800 text-white rounded-md"
            >
              <AiFillEye className="inline-block mb-1 text-xl" /> Demo
            </a>
            <a
              href="https://github.com/matt-plank/jiu-jitsu-notes-api"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-gray-800 text-white rounded-md"
            >
              <FaGithub className="inline-block mb-1 text-xl" /> API
            </a>
            <a
              href="https://github.com/matt-plank/jiu-jitsu-notes-web"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-gray-800 text-white rounded-md"
            >
              <FaGithub className="inline-block mb-1 text-xl" /> Frontend
            </a>
          </div>
        </Card>
      </div>

      <div className="h-28"></div>
    </>
  );
}

export default App;
