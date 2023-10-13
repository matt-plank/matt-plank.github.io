import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import NavBar from "../components/nav/navbar";

const Contact = () => {
  return (
    <>
      <NavBar />

      <div className="flex flex-col items-center">
        <h1 className="font-black text-gray-800 text-3xl">Contact</h1>

        <div className="flex flex-col items-center p-5 gap-5 w-full max-w-2xl">
          <p>
            If you&apos;d like to get in touch, please feel free to reach out
            via email or LinkedIn.
          </p>

          <div className="flex gap-5">
            <div className="flex items-center">
              <a href="mailto:matthew_plank@outlook.com">
                <MdEmail className="cursor-pointer text-4xl text-gray-800" />
              </a>
            </div>
            <div className="flex items-center">matthew_plank@outlook.com</div>
          </div>

          <div className="flex gap-5">
            <div className="flex items-center">
              <a
                href="https://www.linkedin.com/in/matt-t-plank/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="cursor-pointer text-4xl text-gray-800" />
              </a>
            </div>
            <div className="flex items-center">matt-t-plank</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
