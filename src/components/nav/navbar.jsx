import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import NavPanel from "./navPanel";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <div className="flex justify-between p-5 bg-white">
        <AiOutlineMenu
          className="text-2xl cursor-pointer active:scale-75 duration-100"
          onClick={() => {
            setOpen((current) => !current);
          }}
        />
      </div>

      {open && <NavPanel />}
    </div>
  );
};

export default NavBar;
