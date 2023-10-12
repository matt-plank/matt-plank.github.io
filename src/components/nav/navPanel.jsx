const NavPanel = () => {
  return (
    <div className="absolute w-full max-w-lg bg-white border-b border-t border-gray-800">
      <p className="w-full px-5 py-3 cursor-pointer hover:bg-gray-50">Home</p>
      <p className="w-full px-5 py-3 cursor-pointer hover:bg-gray-50">
        Articles
      </p>
      <p className="w-full px-5 py-3 cursor-pointer hover:bg-gray-50">
        Contact
      </p>
    </div>
  );
};

export default NavPanel;
