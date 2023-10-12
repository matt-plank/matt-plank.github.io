import { AiFillEye } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import Card from "../components/card";
import ContactIcons from "../components/contactIcons";
import NavBar from "../components/nav/navbar";

const Home = () => {
  return (
    <>
      <NavBar />

      <div className="flex flex-col gap-5">
        <div className="h-8"></div>

        <h1 className="font-black text-gray-800 text-5xl text-center">
          Matt <br className="md:hidden" />
          Plank
        </h1>
        <h2 className="text-gray-800 text-2xl text-center">
          Full Stack Software Engineer
        </h2>

        <ContactIcons />

        <div className="h-16"></div>
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
};

export default Home;
