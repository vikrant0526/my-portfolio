import { FC } from "react";
import { ContactLinkType } from "../types/ContactLink";

const ContactLink: FC<ContactLinkType> = ({ type, href, linkText, emoji, icon }) => {
  return (
    <a
      className="flex text-xl items-center max-w-max border-b-2 border-b-black hover:border-b-emerald-50 py-1"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <h6>
        {type} {emoji ? <span className="text-3xl contact-icon">{emoji}</span> : icon}
      </h6>
      <span className="ml-1">{linkText}</span>
    </a>
  );
};
export default ContactLink;
