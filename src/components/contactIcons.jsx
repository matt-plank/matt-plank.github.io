import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactIcons = () => {
  return (
    <div className="flex justify-center gap-5">
      <a href="https://github.com/matt-plank" target="_blank" rel="noreferrer">
        <FaGithubSquare className="cursor-pointer text-4xl text-gray-800" />
      </a>

      <a href="mailto:matthew_plank@outlook.com">
        <MdEmail className="cursor-pointer text-4xl text-gray-800" />
      </a>

      <a
        href="https://www.linkedin.com/in/matt-t-plank/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin className="cursor-pointer text-4xl text-gray-800" />
      </a>
    </div>
  );
};

export default ContactIcons;
