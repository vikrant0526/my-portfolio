import { useRouter } from "next/router";
import { FC, useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";
import useDarkMode from "../../hooks/useDarkMode";
import { NavLinksType } from "../../types/Layout";
import Logo from "./Logo";
import NavItem from "./NavItem";

type NavProps = {
  navLinks: Array<NavLinksType>;
};

const Nav: FC<NavProps> = ({ navLinks }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <nav className="nav">
      <div className="flex flex-1 justify-between max-w-8xl m-auto">
        <div className="py-2">
          <Logo />
        </div>
        <div className="flex items-center">
          {navLinks.map(({ title, href }) => (
            <NavItem key={title} href={href}>
              {title}
            </NavItem>
          ))}
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
    <button onClick={toggleDarkMode} className="icon-link">
      {isDarkMode ? <FaSun size={24} /> : <BsFillMoonStarsFill size={24} />}
    </button>
  );
};
