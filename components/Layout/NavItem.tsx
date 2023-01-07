import Link from "next/link";
import { FC, useMemo } from "react";
import { NavItemType } from "../../types/Layout";

const NavItem: FC<NavItemType> = ({ children, href, active = false }) => {
  const linkStyle = useMemo(() => {
    const style = "text-lg flex flex-1 px-6 min-h-full items-center";
    if (active) style + "decoration-black";
    return style;
  }, [active]);
  return (
    <Link href={href} className={linkStyle}>
      {children}
    </Link>
  );
};
export default NavItem;
