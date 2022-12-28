import Image from "next/image";
import Section from "../components/Section";

export default function Home() {
  return (
    <>
      <Section atTop className="pt-40 items-start">
        <div>
          <p className="text-6xl">Hey! I&apos;m</p>
          <h1 className="text-9xl font-semibold">Vikrant Shah</h1>
          <p className="text-xl">
            Thanks for visiting my personal portfolio. Get to know me, get to know my work.
          </p>
        </div>
        <Image
          src={"/vikrant-shah-peace-sign-memoji.png"}
          height={175}
          width={175}
          alt="Vikrant Shah NextJS React React-Native NodeJS Developer Thumbs Up Memoji"
        />
      </Section>
      <Section dark>Hello world</Section>
    </>
  );
}
