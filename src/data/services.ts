import { Service } from "@/types";

export const services: Service[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    description:
      "Creating responsive, modern web applications using Angular, React, and cutting-edge technologies.",
    // icon: "💻",
    icon: "/images/frontend-icon.png",
    link: "/frontend",
  },
  {
    id: "uxui",
    title: "UX/UI Design",
    description:
      "Designing intuitive user experiences and beautiful interfaces that engage and convert.",
    icon: "/images/uxui-icon.png",
    link: "/uxui",
  },
  {
    id: "art",
    title: "Art",
    description:
      "Creating stunning artwork, illustrations, and visual content for various mediums.",
    icon: "/images/art-icon.png",
    link: "/art",
  },
];
