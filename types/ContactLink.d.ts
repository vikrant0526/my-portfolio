interface ContactLinkBaseType {
  type: string;
  href: string;
  linkText: string;
}

interface ContactLinkWithEmojiType extends ContactLinkBaseType {
  emoji: string;
  icon?: never;
}

interface ContactLinkWithIconType extends ContactLinkBaseType {
  emoji?: never;
  icon: IconType;
}

export type ContactLinkType = ContactLinkWithEmojiType | ContactLinkWithIconType;
