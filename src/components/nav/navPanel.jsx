import { Link } from "react-router-dom";

const NavPanel = () => {
  return (
    <div className="absolute w-full max-w-lg bg-white border-b border-t border-gray-800">
      <Link to="/">
        <p className="w-full px-5 py-3 cursor-pointer hover:bg-gray-50">Home</p>
      </Link>
      <Link to="/articles">
        <p className="w-full px-5 py-3 cursor-pointer hover:bg-gray-50">
          Articles
        </p>
      </Link>
      <Link to="/contact">
        <p className="w-full px-5 py-3 cursor-pointer hover:bg-gray-50">
          Contact
        </p>
      </Link>
    </div>
  );
};

export default NavPanel;
