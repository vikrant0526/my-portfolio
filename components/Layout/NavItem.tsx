import Link from "next/link";
import { FC, ReactNode, useMemo } from "react";

type NavItemType = { children: ReactNode; href: string; active?: boolean };

const NavItem: FC<NavItemType> = ({ children, href, active = false }) => {
  const linkStyle = useMemo(() => {
    const style = "text-lg flex flex-1 px-6 min-h-full items-center";
    if (active) style + "underline underline-offset-2";
    return style;
  }, [active]);
  return (
    <Link href={href} className={linkStyle}>
      {children}
    </Link>
  );
};
export default NavItem;
