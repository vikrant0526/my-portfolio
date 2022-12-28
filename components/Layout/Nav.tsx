import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";
import useDarkMode from "../../hooks/useDarkMode";

import NavItem from "./NavItem";

type NavProps = {};

const Nav: FC<NavProps> = ({}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <nav className="nav">
      <div className="flex flex-1 justify-between max-w-8xl m-auto">
        <div className="py-2">
          <Link href="/">
            <Image
              src={"/vikrant-shah-smile-memoji.png"}
              height={125}
              width={125}
              alt="Vikrant Shah NextJS React React-Native NodeJS Developer Smile Face Memoji"
              className="scale-75 -rotate-2 hover:scale-100 hover:rotate-2"
            />
          </Link>
        </div>
        <div className="flex items-center">
          <NavItem href="/">Home</NavItem>
          <NavItem href="/about">About</NavItem>
          <NavItem href="/projects">Projects</NavItem>
          <NavItem href="/contact">Contact</NavItem>
          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Nav;

const DarkModeToggle = () => {
  const isDarkMode = useDarkMode((state) => state.isDarkMode);
  const toggleDarkMode = useDarkMode((state) => state.toggleDarkMode);

  return (
    <button onClick={toggleDarkMode} className="mx-4">
      {isDarkMode ? <FaSun size={24} /> : <BsFillMoonStarsFill size={24} />}
    </button>
  );
};
