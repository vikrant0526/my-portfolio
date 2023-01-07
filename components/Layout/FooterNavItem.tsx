import Link from "next/link";
import { FC } from "react";
import { NavItemType } from "../../types/Layout";

const FooterNavItem: FC<NavItemType> = ({ children, href, active = false }) => {
  return (
    <Link href={href} className="text-lg p-4">
      {children}
    </Link>
  );
};
export default FooterNavItem;
