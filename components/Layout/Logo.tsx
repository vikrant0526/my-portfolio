import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src={"/vikrant-shah-smile-memoji.png"}
        height={125}
        width={125}
        alt="Vikrant Shah NextJS React React-Native NodeJS Developer Smile Face Memoji"
        className="scale-75 -rotate-2 hover:scale-100 hover:rotate-2"
      />
      <h3 className="text-4xl">Vikrant Shah</h3>
    </Link>
  );
};
export default Logo;
