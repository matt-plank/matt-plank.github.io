import { BsGlobeAmericas } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { MdOutlineArticle } from "react-icons/md";
import { Link } from "react-router-dom";
import Card from "../components/card";
import ContactIcons from "../components/contactIcons";
import NavBar from "../components/nav/navbar";

import SteakProjectBannerImage from "../images/steak-project.jpg";

const Home = () => {
  return (
    <>
      <NavBar />

      <div className="flex flex-col gap-5">
        <div />

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
            A{" "}
            <a
              className="text-red-700"
              href="https://react.dev/"
              target="_blank"
              rel="noreferrer"
            >
              React
            </a>{" "}
            &{" "}
            <a
              className="text-red-700"
              href="https://vitejs.dev/"
              target="_blank"
              rel="noreferrer"
            >
              Vite
            </a>{" "}
            app I built & maintain for Jiu Jitsu athletes to study the sport and
            track their progress over time.
          </p>

          <p className="text-lg">
            On top of a{" "}
            <a
              className="text-red-700"
              href="https://www.python.org/"
              target="_blank"
              rel="noreferrer"
            >
              Python
            </a>{" "}
            &{" "}
            <a
              className="text-red-700"
              href="https://www.djangoproject.com/"
              target="_blank"
              rel="noreferrer"
            >
              Django
            </a>{" "}
            back-end, the app is deployed automatically using{" "}
            <a
              className="text-red-700"
              href="https://github.com/features/actions"
              target="_blank"
              rel="noreferrer"
            >
              GitHub Actions
            </a>{" "}
            /{" "}
            <a
              className="text-red-700"
              href="https://pages.github.com/"
              target="_blank"
              rel="noreferrer"
            >
              Pages
            </a>
            , as well as{" "}
            <a
              className="text-red-700"
              href="https://www.heroku.com/"
              target="_blank"
              rel="noreferrer"
            >
              Heroku
            </a>{" "}
            for a fast and scalable design.
          </p>

          <br />

          <div className="flex flex-wrap gap-2">
            <a
              href="https://jiujitsunotes.com"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-gray-800 text-white rounded-md"
            >
              <BsGlobeAmericas className="inline-block mb-1 text-xl" /> Live
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
            <Link
              to="/articles/jiu-jitsu-notes"
              className="px-4 py-2 bg-gray-800 text-white rounded-md"
            >
              <MdOutlineArticle className="inline-block mb-1 text-xl" /> Article
            </Link>
          </div>
        </Card>

        <Card img={SteakProjectBannerImage}>
          <h3 className="font-bold text-2xl">The Steak Project</h3>

          <p className="text-lg">
            A React & Next.js app built to help cook steaks with statistical
            models.
          </p>

          <p className="text-lg">
            The back-end is implemented with Python & FastAPI, supported by an
            additional model training service using scikit-learn. Data is stored
            persistently with MongoDB.
          </p>

          <br />

          <div className="flex flex-wrap gap-2">
            <a
              href="https://thesteakproject.com"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-gray-800 text-white rounded-md"
            >
              <BsGlobeAmericas className="inline-block mb-1 text-xl" /> Live
            </a>
            <a
              href="https://github.com/matt-plank/steak-project-api"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-gray-800 text-white rounded-md"
            >
              <FaGithub className="inline-block mb-1 text-xl" /> API
            </a>
            <a
              href="https://github.com/matt-plank/steak-project-web"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-gray-800 text-white rounded-md"
            >
              <FaGithub className="inline-block mb-1 text-xl" /> Frontend
            </a>
            <a
              href="https://github.com/matt-plank/steak-project-model-service"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-gray-800 text-white rounded-md"
            >
              <FaGithub className="inline-block mb-1 text-xl" /> Model Service
            </a>
          </div>
        </Card>
      </div>

      <div className="h-28"></div>
    </>
  );
};

export default Home;
