import { profile, unity, widget } from "../assets";

export const portfolioData = {
  personal: {
    name: "Brinda Davda",
    role: "iOS Developer",
    tagline: "Building production-ready iOS apps and frameworks",
    description:
      "iOS Developer with 2+ years of experience in Swift, SwiftUI, UIKit, AVFoundation, and SDK development.",
    image: profile,
    phone: "+91 78598 55287",
    email: "davdabrinda@gmail.com",
    github: "https://github.com/brindadavda",
  },

  experience: [
    {
      title: "iOS Developer",
      company: "Enpoint",
      duration: "Sep 2024 – Present",
      points: [
        "Working on Cinépolis GO global cinema app",
        "Feature development and maintenance",
        "Using SwiftUI, UIKit, GraphQL APIs",
      ],
    },
    {
      title: "iOS Developer",
      company: "Zerones",
      duration: "Jan 2024 – Sep 2024",
      points: [
        "Improved performance through code optimization",
        "Collaborated with clients and team",
      ],
    },
    {
      title: "Backend Intern",
      company: "Kevit Technologies",
      duration: "July 2023 – Dec 2023",
      points: [
        "Built APIs using TypeScript and MongoDB",
        "Worked with Node.js and Nest.js",
      ],
    },
  ],

  projects: [
    {
      name: "Unity iOS Frameworks",
      description:
        "Reusable iOS frameworks for Unity apps with Swift SDKs and C# bridging.",
      image: unity,
      tags: ["Swift", "Unity", "SDK"],
    },
    {
      name: "Widget Pixel Pet",
      description: "Interactive widget built using SwiftUI and WidgetKit.",
      image: widget,
      tags: ["SwiftUI", "WidgetKit"],
    },
  ],

  skills: {
    languages: ["Swift", "Swift 6", "JavaScript", "TypeScript"],
    frameworks: ["SwiftUI", "UIKit", "AVFoundation", "Core Animation", "WidgetKit"],
    apis: ["REST", "GraphQL"],
    databases: ["SQLite", "MongoDB"],
    tools: ["Git", "Bitbucket", "Jira", "Firebase", "Postman", "GitHub"],
  },

  education: [
    {
      degree: "Bachelor of Engineering in Information Technology",
      institution: "Gujarat Technological University",
      duration: "2020 – 2024",
      score: "CGPA: 9.02 / 10",
    },
  ],
};
