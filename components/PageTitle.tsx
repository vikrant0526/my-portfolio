import Image, { ImageProps } from "next/image";
import { FC } from "react";

type PageTitleProps = {
  titleBegin: string;
  titleMain: string;
  subtitle: string;
  memoji: ImageProps;
};

const PageTitle: FC<PageTitleProps> = ({ titleBegin, titleMain, subtitle, memoji }) => {
  return (
    <>
      <div>
        <p className="text-6xl">{titleBegin}</p>
        <h1 className="text-9xl font-semibold">{titleMain}</h1>
        <p className="text-xl">{subtitle}</p>
      </div>
      <Image {...memoji} alt={memoji.alt} />
    </>
  );
};
export default PageTitle;
