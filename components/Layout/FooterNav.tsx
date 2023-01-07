import { FC } from "react";
import { NavLinksType } from "../../types/Layout";
import FooterNavItem from "./FooterNavItem";

type FooterNavProps = {
  navLinks: Array<NavLinksType>;
};

const FooterNav: FC<FooterNavProps> = ({ navLinks }) => {
  return (
    <nav>
      {navLinks.map(({ title, href }) => (
        <FooterNavItem key={title} href={href}>
          {title}
        </FooterNavItem>
      ))}
    </nav>
  );
};
export default FooterNav;
