interface FooterLink {
  title: string;
  links: {
    name: string;
    link: string;
  }[];
}

const footerLinks: FooterLink[] = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://github.com/KoropeczEgor",
      },
      {
        name: "familiarity",
        link: "https://github.com/KoropeczEgor",
      },
      {
        name: "welcome",
        link: "https://github.com/KoropeczEgor",
      },
      {
        name: "Content",
        link: "https://github.com/KoropeczEgor",
      },
    ],
  },
];

export default footerLinks;
