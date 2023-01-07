import Button from "./Button";
import Section from "./Section";

const GetInTouchSection = () => {
  return (
    <Section className="flex-row py-16">
      <div className="w-3/4">
        <h6 className="text-3xl">Wanna get in touch?</h6>
        <p className="text-xl">
          Sure! Let&apos;s grab a coffee 🍵 (well if lord COVID-19 allows us to 🤞) or just jump on
          a video chat 💻 we&apos;ve been doing that quite a lot lately. Anyway, hit me up 📞.
        </p>
      </div>
      <div className="flex flex-1 justify-end items-center">
        <Button className="min-w-max">Get in Touch</Button>
      </div>
    </Section>
  );
};
export default GetInTouchSection;
