import { AiOutlineContacts, AiOutlineHome } from "react-icons/ai";
import { GrArticle } from "react-icons/gr";
import { Link } from "react-router-dom";

const NavPanel = () => {
  return (
    <div className="absolute w-full max-w-lg bg-white border-b border-t border-gray-800">
      <Link to="/">
        <div className="w-full px-5 py-3 cursor-pointer hover:bg-gray-50 flex gap-5 items-center">
          <AiOutlineHome className="mt-0.5" />
          Home
        </div>
      </Link>
      <Link to="/articles">
        <div className="w-full px-5 py-3 cursor-pointer hover:bg-gray-50 flex gap-5 items-center">
          <GrArticle className="mt-0.5" />
          Articles
        </div>
      </Link>
      <Link to="/contact">
        <div className="w-full px-5 py-3 cursor-pointer hover:bg-gray-50 flex gap-5 items-center">
          <AiOutlineContacts className="mt-0.5" />
          Contact
        </div>
      </Link>
    </div>
  );
};

export default NavPanel;
