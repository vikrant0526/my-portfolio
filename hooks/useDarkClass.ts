import { useMemo } from "react";

const useDarkClass = (dark: boolean) => {
  const style = useMemo(() => {
    if (dark) return "dark";
    return "";
  }, [dark]);
  return style;
};

export default useDarkClass;
