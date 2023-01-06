import Image from "next/image";
import { BsFillCloudDownloadFill } from "react-icons/bs";
import { FaDownload } from "react-icons/fa";
import Button from "../components/Button";
import GetInTouchSection from "../components/GetInTouchSection";
import Section from "../components/Section";
import Seprator from "../components/Seprator";

export default function Home() {
  return (
    <>
      <Section atTop className="items-center flex-row">
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
      <Section dark className="py-20">
        <h3 className="text-7xl text-right">Who am I?</h3>
        <Seprator />
        <p className="mt-4 text-xl">
          Hey there!🖐️ I&apos;m a software engineer 💻 from the land of spicy food 🌶️ and Bollywood
          🎥, currently residing in the land of bratwurst 🌭 and beer 🍺, Germany. When I&apos;m not
          busy building web and mobile apps that&apos;ll make your jaw drop 🤯, you can find me
          indulging in my love for anime 🌟 or cooking up some mouth-watering Indian food 🥘
          that&apos;ll make you say &quot;namaste&quot; 🙏 to your taste buds. Just like the
          determined and persevering &quot;Naruto,&quot; 🔥 I am always ready to take on new
          challenges 💪 and strive to be the very best (like no one ever was) 🏆. &quot;Believe
          it!&quot; 🙏 I&apos;m all about creating user-friendly and innovative apps that&apos;ll
          make you go &quot;woah,&quot; 🤩 and am always on the lookout for new opportunities to
          learn and grow as a developer 📈. So take a look around my portfolio website 🌐 and get to
          know me a bit better through my projects and experiences 💼. And don&apos;t worry, I
          promise to keep things lively and cheese-free (no need to bust out the fondue pot here!)
          🧀.
        </p>
        <p className="mt-4 text-xl">
          Well if you wanna have it in short and simple you can download my Resumè here.
        </p>
        <Button className="mt-4">
          Download <BsFillCloudDownloadFill size={24} className="button-icon" />
        </Button>
      </Section>
      <GetInTouchSection />
    </>
  );
}
