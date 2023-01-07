import { FC, ReactNode, useMemo } from "react";
import useDarkClass from "../hooks/useDarkClass";

type SectionProps = {
  children: ReactNode;
  dark?: boolean;
  atTop?: boolean;
  className?: string;
};

const Section: FC<SectionProps> = ({ children, dark = false, atTop = false, className = "" }) => {
  const darkStyle = useDarkClass(dark);
  const [atTopSectionStyle, atTopDivStyle] = useMemo(() => {
    if (atTop) return ["pt-36", "full-section"];
    return ["", ""];
  }, [atTop]);

  return (
    <section className={`border-emerald-50 border-b ${darkStyle} ${atTopSectionStyle}`}>
      <div>
        <div className={`section-div ${atTopDivStyle} ${className}`}>{children}</div>
      </div>
    </section>
  );
};
export default Section;
