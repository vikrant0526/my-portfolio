import { FC, ReactNode, useMemo } from "react";
import useDarkClass from "../../hooks/useDarkClass";
import Nav from "./Nav";

type LayoutProps = {
  children: ReactNode;
  dark?: boolean;
};

const Layout: FC<LayoutProps> = ({ children, dark = false }) => {
  const darkStyle = useDarkClass(dark);
  return (
    <>
      <header className={darkStyle}>
        <Nav />
      </header>
      <main className={darkStyle}>{children}</main>
      <footer></footer>
    </>
  );
};
export default Layout;
