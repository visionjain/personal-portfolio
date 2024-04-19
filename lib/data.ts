import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/jlc.png";
import rmtdevImg from "@/public/lrn.png";
import wordanalyticsImg from "@/public/agri.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Website Developer Intern",
    location: "Microsoft, FRT Program",
    description:
      "Microsoft future ready talent remote internship. Including major project on agriculture and education sector.",
    icon: React.createElement(LuGraduationCap),
    date: "Oct 2022 - Nov 2022",
  },
  {
    title: "Research Intern",
    location: "Deloitte, Remote",
    description:
      "Conducted in-depth technical analyses using advanced tools and methodologiesto evaluate emerging technologies, industry trends, or specific client requirements",
    icon: React.createElement(CgWorkAlt),
    date: "feb 2023 - apr 2023",
  },
  {
    title: "Founder",
    location: "Qwiklabs Developer Club SRMIST",
    description:
      "A student-led organization dedicated to providing a platform for hands-on labs, learning cloud computing, and fostering a vibrant community.",
    icon: React.createElement(FaReact),
    date: "Aug 2023 - present",
  },
  {
    title: "Intern",
    location: "Thales Group, Noida",
    description:
      "Will get to learn about data security products and include in study of related concepts and technology stack.",
    icon: React.createElement(CgWorkAlt),
    date: "Upcoming (June 2024 - July 2024)",
  },
] as const;

export const projectsData = [
  {
    title: "JLC DMS",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. A data management system for a constuction product company.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Learn-X",
    description:
      "A E-learning platform for the students of SRMIST. I was the front-end developer. It has features like hosting courses, live sessions and performance monitoring.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Agri-Powerhub",
    description:
      "A website to give services and awarness about agriculture. Powering the mordernization into agri sector and helping to analyze the soil factors.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Java",
  "C/C++",
  "GCP",
  "AWS",
  "Postman",
  "Framer Motion",
] as const;
