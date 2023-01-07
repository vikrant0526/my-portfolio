import { FC } from "react";
import Seprator from "./Seprator";

type SectionTitleProps = {
  title: string;
};

const SectionTitle: FC<SectionTitleProps> = ({ title }) => {
  return (
    <>
      <h3 className="text-7xl text-right">{title}</h3>
      <Seprator />
    </>
  );
};
export default SectionTitle;
