import { FC } from "react";
import useDarkClass from "../hooks/useDarkClass";

type SepratorProps = {
  className?: string;
};

const Seprator: FC<SepratorProps> = ({ className = "" }) => {
  return <span className={`h-1 rounded-md bg-black dark:bg-emerald-50 my-3 ${className}`} />;
};
export default Seprator;
