import { useState, useEffect, useRef } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const navRef = useRef();
  const [isNavOpened, setIsNavOpened] = useState(false);

  useEffect(() => {
    const checkIfClickedOutside = ({ target }) => {
      console.log("111");
      if (isNavOpened && !navRef.current?.contains(target))
        setIsNavOpened(false);
    };
    window.addEventListener("mousedown", checkIfClickedOutside);

    return () => window.removeEventListener("mousedown", checkIfClickedOutside);
  }, [isNavOpened]);

  return (
    <div className="mx-auto flex h-24 max-w-[1240px] select-none items-center justify-between px-4 text-white">
      <h1 className="flex-1 text-3xl font-bold text-[#00df9a]">React.</h1>
      <ul className="hidden md:flex md:items-center">
        <li className="w-24 p-4">소개</li>
        <li className="w-24 p-4">로드맵</li>
        <li className="w-24 p-4">멘토링</li>
        <li className="w-24 p-4">커뮤니티</li>
      </ul>
      <div
        onClick={() => setIsNavOpened(prev => !prev)}
        className="block cursor-pointer p-4 md:hidden"
      >
        <AiOutlineMenu size={20} />
      </div>
      {isNavOpened && (
        <ul
          ref={navRef}
          className="fixed right-0 top-0 h-full w-2/5 divide-y-[1px] divide-gray-600 border-r-gray-900 bg-gray-900 pb-4 pl-4 pr-4 pt-12 md:hidden"
        >
          <li className="p-4">소개</li>
          <li className="p-4">로드맵</li>
          <li className="p-4">멘토링</li>
          <li className="p-4">커뮤니티</li>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
