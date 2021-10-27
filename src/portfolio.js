/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "Tarun Sastry",
  title: "Hi all, I'm Tarun",
  subTitle:
    "I am a fresher, freelancer and a software developer who crafts beautiful web and mobile applications. Specializing in maintaining perfect balance of technical & managerial skills. I tend to generally stands out from the crowd.",
  resumeLink:
    "https://drive.google.com/file/d/1MkZIUzpiYIU78gu7_CVkf8T7XxU_UCNd/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/tarunsas3",
  linkedin: "https://www.linkedin.com/in/tarun-sastry-394230b3/",
  gmail: "tarunsastry99@gmail.com",
  gitlab: "https://gitlab.com/tarunsas3",
  //facebook: "https://www.facebook.com/tarun.sastry",
  medium: "https://medium.com/@tarunsastry99",
  stackoverflow: "https://stackoverflow.com/users/17234665/tarun-sastry",
  //instagram: "https://www.instagram.com/tarunsas3/",
  //twitter: "https://twitter.com/Tarun231099",
  kaggle: "https://www.kaggle.com/tarunsastry",
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE THE WORLD OF WEB AND MOBILE DEVELOPMENT",
  skills: [
    emoji("🥇 AS A FULL STACK DEVELOPER"),
    emoji("⚡ Building responsive website front end using React-Redux"),
    emoji(
      "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin"
    ),
    emoji("⚡ Creating application backend in Node, Express & Flask"),
    "___________________________________________________________________",
    emoji("🥈 AS A UI / UX DESIGNER"),
    emoji(
      "⚡ Designing highly attractive user interface for mobile and web applications"
    ),
    emoji("⚡ Customizing logo designs and building logos from scratch"),
    emoji(
      "⚡ Creating the flow of application functionalities to optimize user experience"
    )
  ],

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend Development", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Software Testing",
      progressPercentage: "80%"
    },
    {
      Stack: "Backend Development",
      progressPercentage: "70%"
    },
    {
      Stack: "Software Development",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Test Associate",
      company: "Maveric Systems",
      companylogo: require("./assets/images/mavericLogo.png"),
      date: "June 2021 – Present",
      descBullets: [
        "I am working on Testing products for finTech domain. The project involves process such as Test Designing , Test Validation and Test Execution.",
        "Currently the project is based for a Middle East Bank. The goal is to make the bank application as less erroneous as possible.",
        "Currently the projects aim is to work on migrating the data of the bank from an existing system to a new and updated system"
      ]
    },
    {
      role: "Fullstack Developer",
      company: "codeSMARTr",
      companylogo: require("./assets/images/codesmartrLogo.png"),
      date: "May 2020 – Feb 2021",
      descBullets: [
        "I have created complete Fullstack Application for the company. making using of latest technological stacks and Industrial standards",
        "As part of the Employee management system for the company we created an android and web based tracking software.",
        "I created and designed enhanced software architecture for the mobile, web application and admin panel for company."
      ]
    },
    {
      role: "Application Developer",
      company: "SDS Ramcides",
      companylogo: require("./assets/images/sdsLogo.png"),
      date: "Jul 2019 – Feb 2021",
      descBullets: [
        "I have redesigned their application from scratch and changed the integration of the whole app from Firebase to MongDB for the company.",
        "I learnt and used the efficient ways of Data communications for the application and gained experience in the real world scenarios.",
        "I learnt the Designing of UI and UX and worked closely with the client to get their perspective"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: true, // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://tarunsastry99.medium.com/copy-by-value-vs-copy-by-reference-d1c7d4e8bfe9",
      title: "Copy by Value Vs Copy by Reference",
      description:
        "Copy by value and copy by reference methods have always been a confusing concept. To understand the difference between the two types of copy we need to understand what happens in the memory after we assign a value to it..."
    },
    {
      url: "https://tarunsastry99.medium.com/difference-between-http1-1-vs-http2-eafdbe284225",
      title: "Difference between HTTP1.1 vs HTTP2",
      description:
        "Hypertext Transfer Protocol (HTTP) is an application protocol that is, currently, the foundation of data communication for the World Wide Web..."
    },
    {
      url: "https://tarunsastry99.medium.com/how-do-you-copy-by-value-a-composite-data-type-in-javascript-1d3e4299e44f",
      title: "How do you copy by value a composite data type in JavaScript ?",
      description:
        "Data types basically specify what kind of data can be stored. There are six basic data types in JavaScript, In general, Primitive Data Types(String, Boolean..) are passed By Value and Composite Data Types(objects) are passed By Reference..."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 63743 85023",
  email_address: "tarunsastry99@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
