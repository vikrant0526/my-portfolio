import { FC, ReactNode } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaStackOverflow, FaTwitter } from "react-icons/fa";
import useDarkClass from "../../hooks/useDarkClass";
import { NavLinksType } from "../../types/Layout";
import FooterNav from "./FooterNav";
import Logo from "./Logo";
import Nav from "./Nav";

const navLikns: Array<NavLinksType> = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Projects", href: "/projects" },
  { title: "Contact", href: "/contact" },
];

type LayoutProps = {
  children: ReactNode;
  dark?: boolean;
};

const Layout: FC<LayoutProps> = ({ children, dark = false }) => {
  const darkStyle = useDarkClass(dark);
  const currentYear = new Date().getFullYear();
  return (
    <>
      <header className={darkStyle}>
        <Nav navLinks={navLikns} />
      </header>
      <main className={darkStyle}>{children}</main>
      <footer className="bg-black p-6 dark">
        <div className="max-w-8xl m-auto flex flex-col items-center">
          <div className="w-full flex justify-between items-center">
            <Logo />
            <FooterNav navLinks={navLikns} />
            <div>
              <h4 className="text-2xl m-4 text-right">Also find me on</h4>
              <div className="flex flex-1">
                <FaGithub size={32} className="icon-link" />
                <FaStackOverflow size={32} className="icon-link" />
                <FaLinkedin size={32} className="icon-link" />
                <FaInstagram size={32} className="icon-link" />
                <FaTwitter size={32} className="icon-link" />
              </div>
            </div>
          </div>
          <p className="text-sm mt-2">Copyright &copy; {currentYear} Vikrant Shah</p>
        </div>
      </footer>
    </>
  );
};
export default Layout;
