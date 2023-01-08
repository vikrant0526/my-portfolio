import { FC } from "react";
import { FaGithub } from "react-icons/fa";
import { NavLinksType } from "../../types/Layout";
import FooterNavItem from "./FooterNavItem";

type FooterNavProps = {
  navLinks: Array<NavLinksType>;
};

const FooterNav: FC<FooterNavProps> = ({ navLinks }) => {
  const currentYear = new Date().getFullYear();

  return (
    <nav className="flex flex-col items-center">
      <div>
        {navLinks.map(({ title, href }) => (
          <FooterNavItem key={title} href={href}>
            {title}
          </FooterNavItem>
        ))}
      </div>
      <a
        href="https://github.com/vikrant0526/my-portfolio"
        target="_blank"
        rel="noreferrer"
        className="flex items-center mt-2"
      >
        Checkout this project on <FaGithub size={24} className="ml-2" />
      </a>
    </nav>
  );
};
export default FooterNav;
