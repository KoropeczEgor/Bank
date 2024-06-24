import person1 from "../assets/person1.png";
import person2 from "../assets/person2.png";
import person3 from "../assets/person3.png";

interface Testimonial {
  id: string;
  about: string;
  image: string;
  name: string;
  title: string;
}

const testiomonials: Testimonial[] = [
  {
    id: "1",
    about:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    image: person1,
    name: "Sophia Anne",
    title: "Founder & Leader",
  },
  {
    id: "2",
    about:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    image: person2,
    name: "Steve Smith",
    title: "CEO",
  },
  {
    id: "3",
    about:
      "It is usually people in the money business and international trade that are really rich.",
    image: person3,
    name: "Jasmine Florence",
    title: "Founder & Leader",
  },
];

export default testiomonials;
