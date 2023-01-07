import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaStackOverflow,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import CheckThisProject from "../components/CheckThisProject";
import ContactLink from "../components/ContactLink";
import PageTitle from "../components/PageTitle";
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import { ContactLinkType } from "../types/ContactLink";

const contactLinks: Array<ContactLinkType> = [
  {
    type: "Email",
    emoji: "✉",
    href: "mailto:vikrantch123@gmail.com",
    linkText: "vikrantch123@gmail.com",
  },
  {
    type: "Mobile",
    emoji: "📱",
    href: "tel:4915751769542",
    linkText: "+49 157 5176 9542",
  },
  {
    type: "WhatsApp",
    href: "https://wa.me/4915214778537",
    linkText: "+49 152 1477 8537",
    icon: <FaWhatsapp size={28} className="contact-icon" />,
  },
];

const socialLinks: Array<ContactLinkType> = [
  {
    type: "LinkedIn",
    icon: <FaLinkedin size={28} className="contact-icon" />,
    href: "https://www.linkedin.com/in/vikrant55/",
    linkText: "Vikrant Shah",
  },
  {
    type: "Instagram",
    icon: <FaInstagram size={28} className="contact-icon" />,
    href: "https://www.instagram.com/vikrant_5.5/",
    linkText: "vikrant_5.5",
  },
  {
    type: "Twitter",
    icon: <FaTwitter size={28} className="contact-icon" />,
    href: "https://twitter.com/vikrant_55",
    linkText: "vikrant_55",
  },
];

const nerdLinks: Array<ContactLinkType> = [
  {
    type: "GitHub",
    icon: <FaGithub size={28} className="contact-icon" />,
    href: "https://github.com/vikrant0526",
    linkText: "vikrant0526",
  },
  {
    type: "Stackoverflow",
    icon: <FaStackOverflow size={28} className="contact-icon" />,
    href: "https://stackoverflow.com/users/15191315/vikrant-shah",
    linkText: "Vikrant Shah",
  },
];

const Contact = () => {
  return (
    <>
      <Section atTop className="items-center flex-row">
        <PageTitle
          titleBegin="Let's get in"
          titleMain="Contact"
          subtitle="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          memoji={{
            src: "/vikrant-shah-call-me-memoji.png",
            height: 200,
            width: 200,
            alt: "Vikrant Shah NextJS React React-Native NodeJS Developer Call Me Memoji",
          }}
        />
      </Section>
      <Section dark className="py-20">
        <SectionTitle title="Here's how" />
        <div className="flex flex-1">
          <div className="flex flex-1 flex-col">
            <h4 className="text-4xl my-4">Contact Me Directly</h4>
            {contactLinks.map((contactLink) => (
              <ContactLink {...contactLink} key={contactLink.href} />
            ))}
          </div>
          <div className="flex flex-1 flex-col">
            <h4 className="text-4xl my-4">Or Follow me</h4>
            {socialLinks.map((contactLink) => (
              <ContactLink {...contactLink} key={contactLink.href} />
            ))}
          </div>
          <div className="flex flex-1 flex-col">
            <h4 className="text-4xl my-4">Nerd Links</h4>
            {nerdLinks.map((contactLink) => (
              <ContactLink {...contactLink} key={contactLink.href} />
            ))}
          </div>
        </div>
      </Section>
      <CheckThisProject />
    </>
  );
};
export default Contact;
