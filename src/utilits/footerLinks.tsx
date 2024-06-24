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
  {
    title: "Communuty",
    links: [
      {
        name: "Help Center",
        link: "https://github.com/KoropeczEgor",
      },
      {
        name: "Partners",
        link: "https://github.com/KoropeczEgor",
      },
      {
        name: "Suggestions",
        link: "https://github.com/KoropeczEgor",
      },
      {
        name: "Blog",
        link: "https://github.com/KoropeczEgor",
      },
      {
        name: "News letters",
        link: "https://github.com/KoropeczEgor",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://github.com/KoropeczEgor",
      },
      {
        name: "Become a Partner",
        link: "https://github.com/KoropeczEgor",
      },
    ],
  },
];

export default footerLinks;
