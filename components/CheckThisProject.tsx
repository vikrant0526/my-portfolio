import { FaGithub } from "react-icons/fa";
import openLink from "../utils/openLink";
import Button from "./Button";
import Section from "./Section";

const CheckThisProject = () => {
  return (
    <Section className="flex-row py-16">
      <div className="w-3/4">
        <h6 className="text-3xl">Make this website your own!</h6>
        <p className="text-xl">
          Like it? Checkout this project on my GitHub. Clone it, Fork it & Customise it. Use it as a
          template and add your own flares to it. If you can (or I hope you want) tag me in and give
          this repo a star on Github.
        </p>
      </div>
      <div className="flex flex-1 justify-end items-center">
        <Button
          className="min-w-max"
          onClick={() => openLink("https://github.com/vikrant0526/my-portfolio", true)}
        >
          GitHub <FaGithub size={24} className="button-icon" />
        </Button>
      </div>
    </Section>
  );
};
export default CheckThisProject;
